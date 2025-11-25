#!/usr/bin/env python3
"""
Log Analysis Script - Analyzes SSH failed login attempts
"""
import re
from collections import defaultdict
import matplotlib.pyplot as plt
from pathlib import Path


def parse_log_file(log_file_path):
    """Parse log file and extract failed password attempts per IP."""
    failed_attempts = defaultdict(int)
    
    # Regex pattern to match failed password lines
    pattern = r'Failed password for .* from (\d+\.\d+\.\d+\.\d+)'
    
    with open(log_file_path, 'r') as f:
        for line in f:
            match = re.search(pattern, line)
            if match:
                ip_address = match.group(1)
                failed_attempts[ip_address] += 1
    
    return failed_attempts


def flag_suspicious_ips(failed_attempts, threshold=3):
    """Flag IPs with more than the specified threshold of failed attempts."""
    suspicious_ips = {ip: count for ip, count in failed_attempts.items() 
                      if count > threshold}
    return suspicious_ips


def create_visualization(failed_attempts, output_file='failed_login_chart.png'):
    """Create a bar chart of failed login attempts per IP."""
    if not failed_attempts:
        print("No failed login attempts found.")
        return
    
    # Sort by count (descending)
    sorted_attempts = sorted(failed_attempts.items(), key=lambda x: x[1], reverse=True)
    ips = [ip for ip, _ in sorted_attempts]
    counts = [count for _, count in sorted_attempts]
    
    # Create bar chart
    plt.figure(figsize=(12, 6))
    bars = plt.bar(range(len(ips)), counts, color='steelblue')
    
    # Color bars red if count > 3
    for i, (ip, count) in enumerate(sorted_attempts):
        if count > 3:
            bars[i].set_color('red')
    
    plt.xlabel('IP Address', fontsize=12)
    plt.ylabel('Failed Login Attempts', fontsize=12)
    plt.title('Failed SSH Login Attempts by IP Address', fontsize=14, fontweight='bold')
    plt.xticks(range(len(ips)), ips, rotation=45, ha='right')
    plt.axhline(y=3, color='orange', linestyle='--', linewidth=2, label='Threshold (3 attempts)')
    plt.legend()
    plt.tight_layout()
    plt.grid(axis='y', alpha=0.3)
    
    # Save the chart
    plt.savefig(output_file, dpi=150, bbox_inches='tight')
    print(f"\n📊 Chart saved to: {output_file}")
    
    # Display the chart
    plt.show()


def print_summary_table(failed_attempts, suspicious_ips):
    """Print a formatted summary table."""
    print("\n" + "="*70)
    print("SSH LOG ANALYSIS SUMMARY")
    print("="*70)
    
    # Sort by count (descending)
    sorted_attempts = sorted(failed_attempts.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n{'IP Address':<20} {'Failed Attempts':<20} {'Status':<20}")
    print("-"*70)
    
    for ip, count in sorted_attempts:
        status = "🚨 SUSPICIOUS" if ip in suspicious_ips else "✓ Normal"
        print(f"{ip:<20} {count:<20} {status:<20}")
    
    print("-"*70)
    print(f"\nTotal unique IPs: {len(failed_attempts)}")
    print(f"Suspicious IPs (>3 attempts): {len(suspicious_ips)}")
    print(f"Total failed attempts: {sum(failed_attempts.values())}")
    
    if suspicious_ips:
        print("\n⚠️  ALERT: The following IPs have more than 3 failed attempts:")
        for ip, count in sorted(suspicious_ips.items(), key=lambda x: x[1], reverse=True):
            print(f"   • {ip}: {count} attempts")
    
    print("="*70 + "\n")


def main():
    # Default log file path
    log_file = Path(__file__).parent / 'sample_logs.log'
    
    print(f"\n🔍 Analyzing log file: {log_file}")
    print("-"*70)
    
    # Parse the log file
    failed_attempts = parse_log_file(log_file)
    
    if not failed_attempts:
        print("No failed login attempts found in the log file.")
        return
    
    # Flag suspicious IPs
    suspicious_ips = flag_suspicious_ips(failed_attempts, threshold=3)
    
    # Print summary table
    print_summary_table(failed_attempts, suspicious_ips)
    
    # Create visualization
    output_chart = Path(__file__).parent / 'failed_login_chart.png'
    create_visualization(failed_attempts, output_file=str(output_chart))


if __name__ == "__main__":
    main()

