#!/usr/bin/env python3
"""
Visualize Failed Login Attempts from Log File
Generates a bar chart for incident reporting
"""

import re
from collections import Counter
import matplotlib.pyplot as plt
from datetime import datetime

def parse_failed_logins(log_file):
    """Parse log file and extract failed login attempts by IP"""
    failed_attempts = []
    
    with open(log_file, 'r') as f:
        for line in f:
            if 'Failed password' in line:
                # Extract IP address using regex
                match = re.search(r'from ([\d.]+) port', line)
                if match:
                    ip = match.group(1)
                    failed_attempts.append(ip)
    
    return Counter(failed_attempts)

def create_visualization(ip_counts, output_file='failed_login_chart.png'):
    """Create a bar chart of failed login attempts"""
    
    # Sort by count (descending)
    sorted_ips = sorted(ip_counts.items(), key=lambda x: x[1], reverse=True)
    ips = [ip for ip, _ in sorted_ips]
    counts = [count for _, count in sorted_ips]
    
    # Create figure with professional styling
    plt.figure(figsize=(10, 6))
    bars = plt.bar(ips, counts, color=['#d9534f', '#f0ad4e', '#5bc0de'])
    
    # Add value labels on top of bars
    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2., height,
                f'{int(height)}',
                ha='center', va='bottom', fontweight='bold', fontsize=11)
    
    # Styling
    plt.xlabel('IP Address', fontsize=12, fontweight='bold')
    plt.ylabel('Failed Login Attempts', fontsize=12, fontweight='bold')
    plt.title('Failed SSH Login Attempts by Source IP\nIncident Report - Jan 10', 
              fontsize=14, fontweight='bold', pad=20)
    
    # Add threshold line at 3 attempts
    plt.axhline(y=3, color='red', linestyle='--', linewidth=2, alpha=0.7, 
                label='Threat Threshold (>3 attempts)')
    plt.legend(loc='upper right')
    
    # Grid for better readability
    plt.grid(axis='y', alpha=0.3, linestyle='--')
    
    # Tight layout
    plt.tight_layout()
    
    # Save figure
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"✓ Chart saved to: {output_file}")
    
    # Also display
    plt.show()
    
    return sorted_ips

def print_summary_table(ip_counts):
    """Print a formatted table summary"""
    print("\n" + "="*70)
    print("FAILED SSH LOGIN ATTEMPTS - INCIDENT REPORT")
    print("="*70)
    print(f"{'IP Address':<20} {'Failed Attempts':<20} {'Threat Level':<20}")
    print("-"*70)
    
    sorted_ips = sorted(ip_counts.items(), key=lambda x: x[1], reverse=True)
    
    for ip, count in sorted_ips:
        if count > 3:
            threat = "⚠️  HIGH RISK"
        elif count > 1:
            threat = "⚠️  MODERATE"
        else:
            threat = "✓ LOW"
        print(f"{ip:<20} {count:<20} {threat:<20}")
    
    print("-"*70)
    print(f"{'TOTAL':<20} {sum(ip_counts.values()):<20}")
    print("="*70)
    print(f"\nThreshold: >3 attempts indicates potential brute-force attack")
    print(f"IPs exceeding threshold: {sum(1 for count in ip_counts.values() if count > 3)}")
    print()

if __name__ == "__main__":
    log_file = "sample_logs.log"
    
    # Parse logs
    print("Analyzing log file...")
    ip_counts = parse_failed_logins(log_file)
    
    # Print table
    print_summary_table(ip_counts)
    
    # Create visualization
    print("Generating visualization...")
    create_visualization(ip_counts)
    
    print("\n✓ Analysis complete!")

