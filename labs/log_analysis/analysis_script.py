#!/usr/bin/env python3
import re
from collections import Counter

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
