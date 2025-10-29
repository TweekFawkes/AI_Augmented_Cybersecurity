#!/bin/bash

# Comprehensive Security Tools Installation Script for macOS M1 ARM
# This script installs all security tools required for the secaudit.md workflow

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on macOS
check_macos() {
    if [[ "$OSTYPE" != "darwin"* ]]; then
        log_error "This script is designed for macOS. Current OS: $OSTYPE"
        exit 1
    fi

    # Check architecture
    ARCH=$(uname -m)
    if [[ "$ARCH" == "arm64" ]]; then
        log_info "Running on Apple Silicon (M1/M2/M3) - using ARM-optimized installation"
    else
        log_warning "Running on Intel architecture - some tools may use Rosetta"
    fi
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install Homebrew if not present
install_homebrew() {
    if ! command_exists brew; then
        log_info "Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        # Add Homebrew to PATH for Apple Silicon
        if [[ "$ARCH" == "arm64" ]]; then
            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
            eval "$(/opt/homebrew/bin/brew shellenv)"
        else
            echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
            eval "$(/usr/local/bin/brew shellenv)"
        fi

        log_success "Homebrew installed successfully"
    else
        log_info "Homebrew already installed"
    fi
}

# Install uv (fast Python package manager)
install_uv() {
    if ! command_exists uv; then
        log_info "Installing uv (Python package manager)..."

        # Install uv using the official installer (works for both Intel and Apple Silicon)
        curl -LsSf https://astral.sh/uv/install.sh | sh

        # Add uv to PATH
        if [[ "$ARCH" == "arm64" ]]; then
            echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.zshrc
        fi

        export PATH="$HOME/.cargo/bin:$PATH"
        log_success "uv installed successfully"
    else
        log_info "uv already installed"
    fi
}

# Install Python security tools using uv
install_python_security_tools() {
    log_info "Installing Python security tools..."

    # Create a virtual environment for security tools
    uv venv security-tools-env

    # Activate the virtual environment
    source security-tools-env/bin/activate

    # Install all security tools at once for efficiency
    log_info "Installing: bandit, safety, pip-audit, ruff, black, mypy, detect-secrets"
    uv pip install bandit safety pip-audit ruff black mypy detect-secrets

    # Verify installations
    local tools=("bandit" "safety" "pip-audit" "ruff" "black" "mypy" "detect-secrets")
    for tool in "${tools[@]}"; do
        if command_exists "$tool"; then
            log_success "$tool installed successfully"
        else
            log_error "$tool installation failed"
        fi
    done

    # Deactivate virtual environment
    deactivate
    log_success "Python security tools installed in virtual environment"
}

# Install git-secrets
install_git_secrets() {
    if ! command_exists git-secrets; then
        log_info "Installing git-secrets..."

        # Clone and install git-secrets
        git clone https://github.com/awslabs/git-secrets.git /tmp/git-secrets
        cd /tmp/git-secrets
        make install

        # Clean up
        cd -
        rm -rf /tmp/git-secrets

        log_success "git-secrets installed successfully"
    else
        log_info "git-secrets already installed"
    fi
}

# Install additional security tools via Homebrew
install_brew_security_tools() {
    log_info "Installing additional security tools via Homebrew..."

    # Update Homebrew
    brew update

    # Install security tools
    local brew_tools=(
        "nmap"           # Network scanning
        "wireshark"      # Network protocol analyzer
        "john-jumbo"     # Password cracker
        "hashcat"        # Password recovery
        "sqlmap"         # SQL injection tool
        "nikto"          # Web server scanner
        "dirbuster"      # Web content scanner
        "gobuster"       # Directory/file brute forcer
        "masscan"        # Mass IP port scanner
        "dnsrecon"       # DNS enumeration tool
        "theharvester"   # Email, domain, IP harvesting
        "maltego"        # OSINT reconnaissance
        "recon-ng"       # Web reconnaissance framework
        "metasploit"     # Penetration testing framework
        "burp"           # Web vulnerability scanner
        "owasp-zap"      # Web application security scanner
        "nuclei"         # Vulnerability scanner
        "trivy"          # Container/vulnerability scanner
        "grype"          # Vulnerability scanner for containers
        "syft"           # Software Bill of Materials (SBOM)
        "semgrep"        # Static analysis tool
        "gosec"          # Go security checker
        "shellcheck"     # Shell script analysis
        "yamllint"       # YAML linter
        "hadolint"       # Dockerfile linter
    )

    for tool in "${brew_tools[@]}"; do
        if brew list "$tool" >/dev/null 2>&1; then
            log_info "$tool already installed"
        else
            log_info "Installing $tool..."
            if brew install "$tool"; then
                log_success "$tool installed"
            else
                log_warning "$tool installation failed (some tools may require additional setup)"
            fi
        fi
    done

    log_success "Additional security tools installation completed"
}

# Configure git-secrets for common patterns
configure_git_secrets() {
    log_info "Configuring git-secrets patterns..."

    # Configure git-secrets for common secret patterns
    git secrets --register-aws
    git secrets --register-gcloud
    git secrets --register-github
    git secrets --register-slack
    git secrets --register-stripe
    git secrets --register-square

    # Add custom patterns for common secrets
    git secrets --add 'api[_-]?key.*["\']*[A-Za-z0-9_-]{20,}["\']*'
    git secrets --add 'secret.*["\']*[A-Za-z0-9_-]{20,}["\']*'
    git secrets --add 'token.*["\']*[A-Za-z0-9_-]{20,}["\']*'
    git secrets --add 'password.*["\']*[A-Za-z0-9!@#$%^&*()_-]{8,}["\']*'

    log_success "git-secrets configured with common patterns"
}

# Set up security tools in PATH
setup_paths() {
    log_info "Setting up PATH and environment..."

    # Create security tools directory
    mkdir -p ~/.local/bin

    # Add security tools to PATH
    if [[ ":$PATH:" != *":$HOME/.local/bin:"* ]]; then
        echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
    fi

    if [[ ":$PATH:" != *":$HOME/.cargo/bin:"* ]]; then
        echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.zshrc
    fi

    # Source the updated profile
    source ~/.zshrc

    log_success "PATH updated for security tools"
}

# Test installations
test_installations() {
    log_info "Testing security tool installations..."

    # Test Python tools
    source security-tools-env/bin/activate

    local python_tools=("bandit" "safety" "pip-audit" "ruff" "black" "mypy" "detect-secrets")
    for tool in "${python_tools[@]}"; do
        if command_exists "$tool"; then
            log_success "$tool is working"
        else
            log_error "$tool test failed"
        fi
    done

    # Test git-secrets
    if command_exists git-secrets; then
        log_success "git-secrets is working"
        git secrets --version
    else
        log_error "git-secrets test failed"
    fi

    # Test some brew tools
    local brew_test_tools=("nmap" "sqlmap" "nuclei")
    for tool in "${brew_test_tools[@]}"; do
        if command_exists "$tool"; then
            log_success "$tool is working"
        else
            log_warning "$tool not available"
        fi
    done

    deactivate
    log_success "Installation testing completed"
}

# Create convenience scripts
create_convenience_scripts() {
    log_info "Creating convenience scripts..."

    # Create a script to run all security scans
    cat > ~/.local/bin/security-scan << 'EOF'
#!/bin/bash
# Comprehensive Security Scan Script

echo "🔍 Starting comprehensive security scan..."

# Activate Python environment
if [ -d "security-tools-env" ]; then
    source security-tools-env/bin/activate
else
    echo "❌ Python security environment not found"
    exit 1
fi

# Create reports directory
mkdir -p security-reports

# Run security scans
echo "=== Running Bandit (Python SAST) ==="
bandit -r . -f json -o security-reports/bandit-report.json || echo "Bandit scan failed"

echo "=== Running Safety (Dependency Check) ==="
safety check --json > security-reports/safety-report.json || echo "Safety scan failed"

echo "=== Running pip-audit (Package Audit) ==="
pip-audit --format json > security-reports/pip-audit-report.json || echo "pip-audit failed"

echo "=== Running detect-secrets ==="
detect-secrets scan > security-reports/secrets-report.json || echo "detect-secrets failed"

echo "=== Running ruff security checks ==="
ruff check . --select S,SEC --show-source || echo "Ruff security check failed"

echo "=== Running git-secrets ==="
git secrets --scan || echo "git-secrets scan failed"

# Generate summary report
echo "=== Generating Security Summary ==="
echo "# Security Scan Summary" > security-reports/README.md
echo "Generated: $(date)" >> security-reports/README.md
echo "" >> security-reports/README.md
echo "## Scan Results:" >> security-reports/README.md
echo "- Bandit: security-reports/bandit-report.json" >> security-reports/README.md
echo "- Safety: security-reports/safety-report.json" >> security-reports/README.md
echo "- pip-audit: security-reports/pip-audit-report.json" >> security-reports/README.md
echo "- Secrets: security-reports/secrets-report.json" >> security-reports/README.md

echo "✅ Security scan completed. Reports in security-reports/"

deactivate
EOF

    # Make the script executable
    chmod +x ~/.local/bin/security-scan

    # Create update script
    cat > ~/.local/bin/update-security-tools << 'EOF'
#!/bin/bash
# Update Security Tools Script

echo "🔄 Updating security tools..."

# Update Homebrew and packages
brew update && brew upgrade

# Update Python tools
if [ -d "security-tools-env" ]; then
    source security-tools-env/bin/activate
    uv pip install --upgrade bandit safety pip-audit ruff black mypy detect-secrets
    deactivate
fi

echo "✅ Security tools updated"
EOF

    chmod +x ~/.local/bin/update-security-tools

    log_success "Convenience scripts created in ~/.local/bin/"
}

# Main installation process
main() {
    log_info "Starting comprehensive security tools installation for macOS..."
    log_info "Architecture: $(uname -m)"
    log_info "macOS Version: $(sw_vers -productVersion)"

    check_macos
    install_homebrew
    install_uv
    install_python_security_tools
    install_git_secrets
    install_brew_security_tools
    configure_git_secrets
    setup_paths
    create_convenience_scripts
    test_installations

    log_success "🎉 Installation completed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Restart your terminal or run: source ~/.zshrc"
    echo "2. Run security scans: security-scan"
    echo "3. Update tools regularly: update-security-tools"
    echo "4. Check secaudit.md for detailed usage instructions"
    echo ""
    echo "🔧 Available commands:"
    echo "• bandit - Python static security analysis"
    echo "• safety - Dependency vulnerability scanning"
    echo "• pip-audit - Package security auditing"
    echo "• ruff check . --select S,SEC - Code security linting"
    echo "• detect-secrets - Secrets detection"
    echo "• git secrets --scan - Git secrets scanning"
    echo "• security-scan - Run all security tools"
    echo "• update-security-tools - Update all tools"
}

# Run main installation
main "$@"
