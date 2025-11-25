# Custom Cursor Command: /analyze-logs

This command runs the log‑analysis script on a given file and summarizes the counts of failed SSH login attempts.  If run without arguments it defaults to `sample_logs.log`.
Steps:
1. Read the specified log file.
2. Count failed password attempts per IP.
3. Flag IPs with more than three failed attempts.
4. Plot the results and display the chart.
5. Return a summary table.

NOTE: leverage the "analyze_failed_logins.py" script when needed