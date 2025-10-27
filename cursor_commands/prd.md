# Analyze Codebase & Generate/Update PRD

You are an expert Product Manager and Technical Analyst. Your task is to thoroughly analyze this code repository and create or update comprehensive Product Requirements Documents (PRDs).

## Analysis Process

Follow this systematic approach:

### 1. Repository Discovery
- Examine the project structure and identify all major components/modules
- Read README files, documentation, and configuration files
- Identify the technology stack and architecture patterns
- Map out dependencies and integrations between components

### 2. Feature Identification
- Analyze source code to identify implemented features
- Document user-facing functionality
- Identify API endpoints, CLI commands, and UI components
- Note authentication, authorization, and security mechanisms
- Catalog data models and database schemas

### 3. Technical Architecture Analysis
- Document the system architecture and design patterns
- Identify external dependencies (APIs, services, libraries)
- Map data flow and processing pipelines
- Note deployment methods and configurations

### 4. User Journey Mapping
- Identify user personas and use cases
- Document user workflows and interactions
- Note pain points and friction areas
- Identify integration points with external systems

### 5. Gap Analysis
- Compare current implementation against best practices
- Identify missing features or incomplete implementations
- Note technical debt and improvement opportunities
- Document known limitations and constraints

## PRD Structure

Generate or update PRD documents with the following structure:

### Executive Summary
- Product overview and purpose
- Target audience and users
- Key value propositions
- High-level goals and objectives

### Product Context
- Problem statement
- Market context (if applicable)
- User needs and pain points
- Success metrics

### Features & Requirements

#### Functional Requirements
For each feature:
- **Feature Name**: Clear, descriptive name
- **Description**: What it does and why it exists
- **User Stories**: As a [user], I want to [action] so that [benefit]
- **Acceptance Criteria**: Specific, measurable success criteria
- **Priority**: Critical/High/Medium/Low
- **Status**: Implemented/Partial/Planned/Not Started
- **Dependencies**: Related features or external requirements

#### Non-Functional Requirements
- Performance requirements (speed, scalability, throughput)
- Security requirements (authentication, authorization, data protection)
- Reliability requirements (uptime, error handling, recovery)
- Usability requirements (UI/UX, accessibility)
- Maintainability requirements (code quality, documentation)
- Compatibility requirements (browsers, platforms, versions)

### Technical Specifications

#### Architecture
- System architecture diagram (describe in text)
- Component relationships
- Data flow diagrams
- Technology stack

#### APIs & Integrations
- External APIs (authentication, purpose, dependencies)
- Internal APIs/endpoints
- Webhooks and callbacks
- Data formats and protocols

#### Data Models
- Database schema
- Key entities and relationships
- Data validation rules
- Migration considerations

#### Infrastructure
- Deployment architecture
- Hosting requirements
- Scaling considerations
- Monitoring and logging

### User Experience

#### User Flows
- Primary user journeys (step-by-step)
- Alternative flows
- Edge cases and error states

#### UI/UX Requirements
- Interface design principles
- Accessibility requirements
- Responsive design needs
- User feedback mechanisms

### Security & Privacy
- Authentication mechanisms
- Authorization model
- Data protection measures
- Privacy considerations
- Compliance requirements (if any)

### Testing & Quality Assurance
- Testing strategy
- Test coverage requirements
- Quality metrics
- Validation procedures

### Deployment & Operations
- Deployment process
- Environment configurations
- Rollback procedures
- Monitoring and alerting

### Known Issues & Limitations
- Current limitations
- Known bugs or issues
- Technical debt
- Workarounds

### Future Roadmap
- Planned features
- Potential enhancements
- Scaling considerations
- Long-term vision

### Appendices
- Glossary of terms
- References to external documentation
- Related resources

## Output Guidelines

1. **Be Specific**: Use concrete examples and actual code/file references
2. **Be Accurate**: Only document what actually exists in the codebase
3. **Be Comprehensive**: Cover all aspects of the product
4. **Be Structured**: Use clear headings and consistent formatting
5. **Be Actionable**: Include specific acceptance criteria and success metrics
6. **Cite Code**: Reference actual files, functions, and line numbers where relevant
7. **Update Existing**: If PRDs exist, update them rather than replacing them entirely

## File Organization

Create/update PRD documents in the following locations:
- `PRD.md` - Main product requirements document at repository root
- `{component}/PRD.md` - Component-specific PRDs in each major directory
- `docs/PRD/` - Optional: Centralized PRD directory for complex projects

## Execution

1. Start by reading the main README and exploring the repository structure
2. Systematically analyze each major component
3. Create or update PRD documents based on your findings
4. Ensure all PRDs are consistent and cross-reference each other
5. Include a table of contents in the main PRD linking to component PRDs

Begin your analysis now by exploring the repository structure and reading key files.

