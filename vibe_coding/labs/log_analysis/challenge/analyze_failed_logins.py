#!/usr/bin/env python3
"""
Log Analysis Script: Failed Login Detection
Identifies potential attackers based on failed SSH login attempts
"""

import re
from collections import Counter
import matplotlib.pyplot as plt
from pathlib import Path


def parse_failed_logins(log_file):
    """
    Parse log file and extract IPs with failed login attempts
    
    Args:
        log_file: Path to the log file
        
    Returns:
        Counter object with IP addresses and their failed attempt counts
    """
    failed_pattern = re.compile(
        r'Failed password for .* from (\d+\.\d+\.\d+\.\d+)'
    )
    
    ip_addresses = []
    
    with open(log_file, 'r') as f:
        for line in f:
            match = failed_pattern.search(line)
            if match:
                ip_addresses.append(match.group(1))
    
    return Counter(ip_addresses)


def identify_attackers(failed_attempts, threshold=3):
    """
    Identify potential attackers based on failed attempt threshold
    
    Args:
        failed_attempts: Counter object with IP addresses and counts
        threshold: Minimum number of failed attempts to flag as attacker
        
    Returns:
        Dictionary of potential attackers
    """
    return {ip: count for ip, count in failed_attempts.items() 
            if count > threshold}


def create_visualization(failed_attempts, output_file='failed_login_analysis.png'):
    """
    Create a bar chart visualization of failed login attempts
    
    Args:
        failed_attempts: Counter object with IP addresses and counts
        output_file: Output filename for the chart
    """
    if not failed_attempts:
        print("No failed login attempts found.")
        return
    
    # Sort by count (descending)
    sorted_attempts = dict(sorted(failed_attempts.items(), 
                                 key=lambda x: x[1], 
                                 reverse=True))
    
    ips = list(sorted_attempts.keys())
    counts = list(sorted_attempts.values())
    
    # Create figure with better size
    plt.figure(figsize=(12, 6))
    
    # Create bar chart with colors based on severity
    colors = ['#d73027' if count > 3 else '#fee08b' for count in counts]
    bars = plt.bar(ips, counts, color=colors, edgecolor='black', linewidth=1.2)
    
    # Add value labels on top of bars
    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2., height,
                f'{int(height)}',
                ha='center', va='bottom', fontsize=11, fontweight='bold')
    
    # Styling
    plt.xlabel('IP Address', fontsize=12, fontweight='bold')
    plt.ylabel('Failed Login Attempts', fontsize=12, fontweight='bold')
    plt.title('Failed SSH Login Attempts by IP Address\nSecurity Incident Analysis', 
              fontsize=14, fontweight='bold', pad=20)
    plt.xticks(rotation=45, ha='right')
    plt.grid(axis='y', alpha=0.3, linestyle='--')
    
    # Add threshold line
    plt.axhline(y=3, color='red', linestyle='--', linewidth=2, 
                label='Attack Threshold (>3 attempts)', alpha=0.7)
    plt.legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"✅ Visualization saved to: {output_file}")
    plt.close()


def generate_report(failed_attempts, attackers):
    """
    Generate a text report of the analysis
    
    Args:
        failed_attempts: Counter object with all failed attempts
        attackers: Dictionary of potential attackers
    """
    print("\n" + "="*70)
    print("SECURITY INCIDENT REPORT: Failed SSH Login Analysis")
    print("="*70 + "\n")
    
    print(f"📊 Total Failed Login Attempts: {sum(failed_attempts.values())}")
    print(f"🌐 Unique IP Addresses: {len(failed_attempts)}")
    print(f"🚨 Potential Attackers (>3 attempts): {len(attackers)}\n")
    
    print("="*70)
    print("ALL FAILED LOGIN ATTEMPTS BY IP ADDRESS")
    print("="*70)
    
    for ip, count in sorted(failed_attempts.items(), 
                           key=lambda x: x[1], 
                           reverse=True):
        status = "⚠️  POTENTIAL ATTACKER" if count > 3 else "ℹ️  Low Risk"
        print(f"{ip:20s} │ {count:3d} attempts │ {status}")
    
    if attackers:
        print("\n" + "="*70)
        print("🚨 FLAGGED IP ADDRESSES (POTENTIAL ATTACKERS)")
        print("="*70)
        
        for ip, count in sorted(attackers.items(), 
                               key=lambda x: x[1], 
                               reverse=True):
            print(f"\n🔴 {ip}")
            print(f"   └─ Failed Attempts: {count}")
            print(f"   └─ Risk Level: {'CRITICAL' if count > 8 else 'HIGH'}")
            print(f"   └─ Recommended Action: Block IP and investigate")
    
    print("\n" + "="*70)
    print("RECOMMENDATIONS")
    print("="*70)
    print("1. Implement IP-based rate limiting")
    print("2. Block flagged IP addresses at firewall level")
    print("3. Enable multi-factor authentication (MFA)")
    print("4. Review and disable default/common usernames")
    print("5. Implement intrusion detection system (IDS)")
    print("="*70 + "\n")


def main():
    """Main execution function"""
    # Configuration
    log_file = Path(__file__).parent / 'sample_logs.log'
    output_chart = 'failed_login_analysis.png'
    threshold = 3
    
    print("🔍 Analyzing log file for failed login attempts...\n")
    
    # Parse logs
    failed_attempts = parse_failed_logins(log_file)
    
    # Identify attackers
    attackers = identify_attackers(failed_attempts, threshold)
    
    # Generate report
    generate_report(failed_attempts, attackers)
    
    # Create visualization
    create_visualization(failed_attempts, output_chart)
    
    print(f"\n✅ Analysis complete!")


if __name__ == "__main__":
    main()

