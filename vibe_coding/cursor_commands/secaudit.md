# Comprehensive Security Audit & Vulnerability Assessment

You are an expert Cybersecurity Analyst and DevSecOps Engineer. Your task is to conduct a thorough security audit of this codebase using industry-standard tools, frameworks, and best practices.

## Security Audit Framework

Follow this comprehensive security assessment methodology:

### 1. Project Analysis & Reconnaissance
- Identify project type, technology stack, and dependencies
- Map attack surface and potential entry points
- Review configuration files and environment settings
- Analyze third-party integrations and external services

### 2. Dependency Security Analysis
- Scan for vulnerable dependencies using automated tools
- Check for outdated packages and security advisories
- Analyze supply chain risks and transitive dependencies
- Review license compliance and security implications

### 3. Code Security Analysis
- Static Application Security Testing (SAST) for common vulnerabilities
- Review authentication and authorization mechanisms
- Analyze input validation and sanitization practices
- Check for injection vulnerabilities (SQL, XSS, etc.)
- Review cryptographic implementations
- Analyze API security and endpoint protection

### 4. Configuration & Infrastructure Review
- Review security configurations and settings
- Check for secrets management and credential handling
- Analyze deployment and runtime security
- Review access controls and permissions

### 5. Compliance & Best Practices
- OWASP Top 10 vulnerability assessment
- Industry-specific compliance requirements
- Security headers and hardening measures
- Logging and monitoring capabilities

## Automated Security Tools

Execute these security scanning tools in sequence:

### Python-Specific Tools
```bash
# Install security analysis tools
uv pip install bandit safety pip-audit

# Run comprehensive security scans
bandit -r . -f json -o security-report.json
safety check --json > safety-report.json
pip-audit --format json > pip-audit-report.json

# Additional security analysis
# Check for secrets and credentials
git secrets --scan
# Or use detect-secrets if available
detect-secrets scan > secrets-report.json

# Code quality and security
uv pip install ruff black mypy
ruff check . --select S --show-source
```

### Manual Security Review Areas

#### Authentication & Authorization
- Password storage mechanisms (hashing, salting)
- Session management and token handling
- Role-based access controls (RBAC)
- Authentication bypass vulnerabilities
- Privilege escalation risks

#### Input Validation & Data Handling
- SQL injection prevention
- XSS (Cross-Site Scripting) protection
- Command injection vulnerabilities
- File upload security
- Data serialization security (pickle, YAML)

#### Cryptographic Security
- Encryption key management
- TLS/SSL configuration
- Hash function implementations
- Random number generation
- Certificate validation

#### API Security
- Input validation and sanitization  
- Rate limiting implementation
- CORS configuration
- API key management
- Request/response security

## Security Testing Commands

Execute these targeted security assessments:

```bash
# 1. Dependency vulnerabilities
echo "=== DEPENDENCY SECURITY SCAN ==="
safety check --detailed

# 2. Static code analysis
echo "=== STATIC SECURITY ANALYSIS ==="
bandit -r . -f text -v

# 3. Secrets detection
echo "=== SECRETS AND CREDENTIALS SCAN ==="
git secrets --scan 2>/dev/null || echo "Git secrets not available"

# 4. Code quality security checks
echo "=== CODE SECURITY LINTING ==="
ruff check . --select S,SEC --show-source 2>/dev/null || echo "Ruff security checks not available"

# 5. Package audit
echo "=== PACKAGE AUDIT ==="
pip-audit --desc --format text
```

## Vulnerability Assessment Categories

### Critical (Severity 9-10)
- Remote code execution vulnerabilities
- Authentication bypass
- SQL injection in critical paths
- Exposed sensitive credentials
- Complete system compromise

### High (Severity 7-8)
- Privilege escalation
- Cross-site scripting (XSS)
- Command injection
- Information disclosure
- Unauthorized data access

### Medium (Severity 4-6)
- Input validation issues
- Insecure cryptographic implementations
- Missing security headers
- Improper session handling
- Configuration weaknesses

### Low (Severity 1-3)
- Code quality issues
- Documentation gaps
- Best practice violations
- Minor configuration improvements

## Security Report Structure

Generate comprehensive security documentation:

### security-report.md Structure
```markdown
# Security Audit Report
Generated: $(date)

## Executive Summary
- Overall security posture
- Critical findings count
- Risk assessment
- Recommended immediate actions

## Vulnerability Summary
| Severity | Count | Description |
|----------|-------|-------------|
| Critical | X | Remote code execution, auth bypass |
| High | X | Injection, privilege escalation |
| Medium | X | Input validation, crypto issues |
| Low | X | Best practices, configuration |

## Detailed Findings

### 1. Dependency Vulnerabilities
#### [Vulnerability Name] - [Severity]
- **Location**: [file/path]
- **Description**: [vulnerability details]
- **Impact**: [business impact]
- **Remediation**: [fix steps]

```python
# Code snippet showing vulnerability
```

**Remediation Checklist:**
- [ ] Update dependency to version X.X.X
- [ ] Test for breaking changes
- [ ] Verify fix effectiveness
- [ ] Update security monitoring

### 2. Code Security Issues
#### [Issue Type] - [Location]
- **Risk**: [High/Medium/Low]
- **Line Numbers**: [X-Y]
- **Code Pattern**: [problematic code]
- **Fix**: [recommended solution]

### 3. Configuration Issues
#### [Configuration Problem]
- **File**: [config file path]
- **Current Setting**: [insecure setting]
- **Recommended**: [secure setting]
- **Impact**: [security implication]

## Security Hardening Recommendations

### Immediate Actions (Do Today)
1. [Critical fix 1]
2. [Critical fix 2]
3. [Critical fix 3]

### Short-term Improvements (This Week)
1. [High priority fix 1]
2. [High priority fix 2]
3. [High priority fix 3]

### Long-term Security Enhancements (This Month)
1. [Medium priority improvement 1]
2. [Medium priority improvement 2]
3. [Medium priority improvement 3]

## Security Monitoring Setup

```bash
# Set up continuous security monitoring
# Add to CI/CD pipeline
- Bandit security scanning
- Dependency vulnerability checks
- Secrets detection
- Code quality gates
```

## Compliance Checklist
- [ ] OWASP Top 10 coverage
- [ ] Industry-specific requirements
- [ ] Data protection compliance
- [ ] Security logging implementation
- [ ] Incident response procedures

## Next Steps
1. Prioritize and address critical findings
2. Implement automated security testing
3. Establish security monitoring
4. Schedule follow-up assessment
5. Update security documentation
```

## Manual Security Review Process

### Authentication Analysis
1. **Password Security**
   - Check password hashing algorithms
   - Verify salt implementation
   - Review password policies

2. **Session Management**
   - Analyze session storage mechanisms
   - Check session timeout configurations
   - Review token handling procedures

3. **Access Controls**
   - Verify authorization mechanisms
   - Check permission inheritance
   - Review role definitions

### Data Security Review
1. **Input Validation**
   - SQL injection prevention
   - XSS protection mechanisms
   - Command injection safeguards

2. **Output Encoding**
   - HTML entity encoding
   - JSON sanitization
   - Database query parameterization

3. **File Upload Security**
   - File type validation
   - Size limitations
   - Content scanning

### Infrastructure Security
1. **Network Security**
   - TLS/SSL configuration
   - Firewall rules
   - Network segmentation

2. **Access Management**
   - SSH key management
   - API key security
   - Service account permissions

3. **Monitoring & Logging**
   - Security event logging
   - Intrusion detection
   - Log analysis procedures

## Advanced Security Testing

### Penetration Testing Preparation
- Identify test scenarios
- Define rules of engagement
- Prepare test environments
- Document testing scope

### Security Code Review Checklist
```python
# Common vulnerability patterns to check:

# 1. Injection vulnerabilities
user_input = input()  # Check if sanitized
query = f"SELECT * FROM users WHERE id = {user_input}"  # SQL injection risk

# 2. Authentication bypass
if user_role == "admin":  # Check proper validation
    show_admin_panel()

# 3. Information disclosure
except Exception as e:
    print(f"Error: {e}")  # May leak sensitive info

# 4. Insecure deserialization
import pickle
data = pickle.loads(user_data)  # Potential RCE risk

# 5. Path traversal
filename = f"uploads/{user_file}"  # Check path validation
with open(filename) as f:
    content = f.read()
```

## Security Tool Installation & Usage

```bash
# Install security toolkit
echo "Installing security analysis tools..."
uv pip install bandit safety pip-audit ruff detect-secrets

# Run comprehensive security scan
echo "Running security analysis..."
bandit -r . -f json -o bandit-report.json
safety check --json > safety-report.json
pip-audit --format json > audit-report.json

# Generate security report
echo "Generating security report..."
python -c "
import json
from datetime import datetime

# Combine security reports
reports = {}
for tool in ['bandit', 'safety', 'audit']:
    try:
        with open(f'{tool}-report.json') as f:
            reports[tool] = json.load(f)
    except FileNotFoundError:
        reports[tool] = {'error': 'Report not generated'}

# Generate markdown report
with open('security-report.md', 'w') as f:
    f.write(f'# Security Audit Report\\nGenerated: {datetime.now()}\\n\\n')
    f.write('## Tool Results\\n')
    for tool, data in reports.items():
        f.write(f'### {tool.title()}\\n')
        if 'error' in data:
            f.write(f'Error: {data[\"error\"]}\\n')
        else:
            f.write(f'Issues found: {len(data.get(\"results\", []))}\\n')
    f.write('\\n## Recommendations\\n')
    f.write('1. Address all critical and high-severity findings\\n')
    f.write('2. Update vulnerable dependencies\\n')
    f.write('3. Implement security best practices\\n')
    f.write('4. Set up continuous security monitoring\\n')

print('Security report generated: security-report.md')
"
```

## Output & Deliverables

1. **security-report.md** - Comprehensive security assessment report
2. **bandit-report.json** - Detailed static analysis results
3. **safety-report.json** - Dependency vulnerability report
4. **audit-report.json** - Package audit results
5. **Remediation checklist** - Actionable security improvements

## Security Best Practices Implementation

### Development Phase
- Security requirements gathering
- Threat modeling
- Secure coding guidelines
- Code review processes

### Testing Phase
- Security unit tests
- Integration security testing
- Penetration testing
- Vulnerability assessments

### Deployment Phase
- Security configuration review
- Access control verification
- Monitoring setup
- Incident response planning

### Maintenance Phase
- Continuous security monitoring
- Regular vulnerability scanning
- Security patch management
- Security awareness training

## Integration with CI/CD

Add security gates to your development workflow:

```yaml
# Example GitHub Actions security workflow
- name: Security Scan
  run: |
    bandit -r . -f json -o bandit-report.json
    safety check --json > safety-report.json

- name: Upload Security Reports
  uses: actions/upload-artifact@v3
  with:
    name: security-reports
    path: |
      bandit-report.json
      safety-report.json
```

Begin the security audit by analyzing the current project structure and running the automated security tools. Provide specific findings, risk assessments, and actionable remediation steps.