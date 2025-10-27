# macOS Security Tools Installation Script

This script installs all the security tools required for the comprehensive security audit workflow defined in `cursor_commands/secaudit.md`.

## What the script installs:

### Core Python Security Tools (via uv)
- **bandit** - Python static security analysis (SAST)
- **safety** - Python dependency vulnerability scanner
- **pip-audit** - Package security auditing
- **ruff** - Fast Python linter with security rules
- **black** - Python code formatter
- **mypy** - Python type checker
- **detect-secrets** - Secrets and credentials detection

### Git Security Tools
- **git-secrets** - Git commit scanning for secrets and credentials

### Additional Security Tools (via Homebrew)
- **nmap** - Network scanning and reconnaissance
- **sqlmap** - SQL injection testing tool
- **nuclei** - Vulnerability scanner
- **metasploit** - Penetration testing framework
- **owasp-zap** - Web application security scanner
- **trivy** - Container vulnerability scanner
- **semgrep** - Static analysis tool
- And many more security testing tools

## Usage:

### Option 1: Run the full installation
```bash
./scripts/macos_install_sec_tools.sh
```

### Option 2: Run specific sections
The script can be modified to run only specific installation sections by uncommenting the desired functions in the `main()` function.

## What happens during installation:

1. **System Check** - Verifies macOS and architecture (M1/M2/M3 optimized)
2. **Homebrew Installation** - Installs Homebrew if not present
3. **uv Installation** - Sets up the fast Python package manager
4. **Python Tools** - Creates virtual environment and installs security tools
5. **Git Secrets** - Installs and configures git-secrets with common patterns
6. **Additional Tools** - Installs comprehensive security toolkit via Homebrew
7. **Configuration** - Sets up PATH and creates convenience scripts
8. **Testing** - Verifies all tools are working correctly

## After Installation:

### Quick Security Scan
```bash
security-scan
```

### Update All Tools
```bash
update-security-tools
```

### Individual Tool Usage
```bash
# Activate Python environment first
source security-tools-env/bin/activate

# Run specific tools
bandit -r . -f json -o security-report.json
safety check --json > safety-report.json
pip-audit --format json > audit-report.json
ruff check . --select S,SEC --show-source
detect-secrets scan > secrets-report.json
git secrets --scan

# Deactivate when done
deactivate
```

## Requirements:
- macOS (optimized for M1/M2/M3 Apple Silicon)
- Internet connection for downloading tools
- Approximately 2-3 GB of disk space
- Administrative privileges (sudo) may be required for some tools

## Troubleshooting:

### If installation fails:
1. Check internet connection
2. Ensure you have sufficient disk space
3. Try running individual sections of the script
4. Check that Xcode command line tools are installed: `xcode-select --install`

### If tools don't work:
1. Restart your terminal or run: `source ~/.zshrc`
2. Ensure virtual environment is activated for Python tools
3. Check PATH includes security tools directories

### Common issues:
- **Homebrew permission errors**: Run `sudo chown -R $(whoami):admin /usr/local/*` and `/usr/local/.git` if needed
- **Python tools not found**: Make sure virtual environment is activated
- **Git secrets not working**: Run `git secrets --install` in your repository

## Security Notes:
- All tools are installed from official, trusted sources
- Python tools are isolated in a virtual environment
- The script includes comprehensive testing to verify installations
- No system modifications beyond standard package management

## Integration with secaudit.md:
This script installs all tools referenced in the security audit workflow. After installation, you can run the comprehensive security assessment as described in `cursor_commands/secaudit.md`.
