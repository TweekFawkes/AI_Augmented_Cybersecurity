#!/usr/bin/env python3
import re
from collections import Counter
import matplotlib.pyplot as plt

# path to the log file
log_path = 'sample_logs.log'

# regex pattern to extract IP addresses from sshd failed lines
failed_pattern = re.compile(r'Failed password.*from (?P<ip>\d+\.\d+\.\d+\.\d+)')

# dictionary to count failed attempts by IP
counter = Counter()

with open(log_path, 'r') as f:
    for line in f:
        match = failed_pattern.search(line)
        if match:
            ip = match.group('ip')
            counter[ip] += 1

# Print results
print("Failed login attempts by IP:")
for ip, count in counter.most_common():
    print(f"{ip}: {count}")

# Identify suspicious IPs with more than 3 attempts
suspicious_ips = [ip for ip, count in counter.items() if count > 3]

if suspicious_ips:
    print("\nSuspicious IP addresses (more than 3 failed attempts):")
    for ip in suspicious_ips:
        print(ip)
else:
    print("\nNo suspicious IPs found.")

# Create bar chart visualization
if counter:
    # Get IPs and counts sorted by count (descending)
    sorted_items = counter.most_common()
    ips = [item[0] for item in sorted_items]
    counts = [item[1] for item in sorted_items]
    
    # Create figure and axis
    plt.figure(figsize=(12, 6))
    bars = plt.bar(range(len(ips)), counts, color='steelblue', alpha=0.8)
    
    # Highlight suspicious IPs in red
    for i, ip in enumerate(ips):
        if ip in suspicious_ips:
            bars[i].set_color('red')
            bars[i].set_alpha(0.9)
    
    # Customize the chart
    plt.xlabel('IP Address', fontsize=12, fontweight='bold')
    plt.ylabel('Failed Login Attempts', fontsize=12, fontweight='bold')
    plt.title('SSH Failed Login Attempts by IP Address', fontsize=14, fontweight='bold')
    plt.xticks(range(len(ips)), ips, rotation=45, ha='right')
    plt.grid(axis='y', alpha=0.3, linestyle='--')
    
    # Add value labels on top of bars
    for i, count in enumerate(counts):
        plt.text(i, count, str(count), ha='center', va='bottom', fontweight='bold')
    
    # Add legend
    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor='steelblue', alpha=0.8, label='Normal'),
        Patch(facecolor='red', alpha=0.9, label='Suspicious (>3 attempts)')
    ]
    plt.legend(handles=legend_elements, loc='upper right')
    
    plt.tight_layout()
    
    # Save the chart
    output_file = 'failed_login_attempts.png'
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"\n📊 Bar chart saved as '{output_file}'")
    
    # Display the chart
    plt.show()
else:
    print("\nNo failed login attempts found to visualize.")
