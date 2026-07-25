# Prompt Library

## Overview

A curated library of reusable prompts and templates for common tasks in the Genesis project.

---

## Categories

### 1. Code Generation

#### Generate Function

```
Task: Generate a {language} function
Requirements:
- Function name: {name}
- Parameters: {params}
- Return type: {return_type}
- Purpose: {description}
- Examples: {examples}

Generate only the function code, no explanation.
```

#### Generate Test Cases

```
Code:
{code}

Task: Generate comprehensive test cases for the above function.
Framework: {test_framework}
Format: {format}
Coverage: {coverage_percentage}%
```

#### Debug Code

```
Code:
{code}

Error:
{error_message}

Task: Identify and fix the bug. Explain the issue and provide corrected code.
```

### 2. Documentation

#### Generate API Documentation

```
API Endpoint: {endpoint}
Method: {method}
Description: {description}

Generate OpenAPI 3.0 documentation including:
- Endpoint path and method
- Request parameters
- Request body schema
- Response schema
- Error codes
- Examples
```

#### Generate README

```
Project Name: {name}
Technology Stack: {stack}
Key Features: {features}

Generate a comprehensive README with:
- Project overview
- Installation instructions
- Usage examples
- API documentation
- Configuration guide
- Contributing guidelines
```

#### Generate Architecture Documentation

```
System Name: {system_name}
Components: {components}
Integrations: {integrations}

Generate architecture documentation including:
- System overview
- Component descriptions
- Data flow
- Integration points
- Technology decisions
- Deployment architecture
```

### 3. Content Creation

#### Generate Blog Post

```
Topic: {topic}
Target Audience: {audience}
Length: {word_count} words
Style: {style}

Generate a blog post with:
- Engaging title
- Introduction
- Main sections with subheadings
- Examples or case studies
- Conclusion
- Call to action
```

#### Generate Tutorial

```
Topic: {topic}
Skill Level: {beginner/intermediate/advanced}
Duration: {minutes} minutes

Generate a tutorial including:
- Learning objectives
- Prerequisites
- Step-by-step instructions
- Code examples
- Common pitfalls
- Further resources
```

### 4. Analysis

#### Code Review

```
Code:
{code}

Review Criteria:
- Code quality
- Performance
- Security
- Best practices

Provide:
- Summary of findings
- Issues found
- Suggestions for improvement
- Risk assessment
```

#### Requirements Analysis

```
Business Requirement:
{requirement}

Analyze and provide:
- Functional requirements
- Non-functional requirements
- Use cases
- Success criteria
- Potential risks
- Implementation considerations
```

### 5. Problem Solving

#### Architecture Decision

```
Problem: {problem_statement}
Constraints: {constraints}
Options: {options}

For each option, analyze:
- Pros
- Cons
- Implementation effort
- Long-term implications

Provide recommendation with justification.
```

#### Troubleshooting

```
System: {system_name}
Issue: {issue_description}
Error Message: {error_message}
Steps to Reproduce: {steps}

Provide:
- Root cause analysis
- Solution steps
- Preventive measures
- Workarounds if applicable
```

### 6. Planning

#### Project Planning

```
Project Name: {name}
Scope: {scope}
Timeline: {timeline}
Resources: {resources}

Create a project plan including:
- Objectives and goals
- Deliverables
- Timeline and milestones
- Resource allocation
- Risk management
- Success criteria
```

#### Sprint Planning

```
Backlog Items: {items}
Team Capacity: {capacity}
Sprint Duration: {days} days

Create sprint plan with:
- Selected user stories
- Task breakdown
- Estimates
- Assignments
- Dependencies
- Sprint goals
```

---

## Prompt Patterns

### Chain-of-Thought Pattern

```
Task: {task}
Explain your reasoning step by step:
1. First, {step}
2. Then, {step}
3. Finally, {step}
```

### Role-Based Pattern

```
Assuming the role of a {role}, how would you:
{task}

Consider:
- {perspective1}
- {perspective2}
- {perspective3}
```

### Structured Output Pattern

```
Provide output in the following format:
{
  "summary": "...",
  "details": ["..."],
  "recommendations": ["..."],
  "next_steps": ["..."]
}
```

---

## Usage Guidelines

### Customization

- Replace {placeholder} with actual values
- Adjust detail level as needed
- Add domain-specific context
- Combine templates for complex tasks

### Best Practices

1. Start with a relevant template
2. Customize for your needs
3. Test and evaluate results
4. Refine based on feedback
5. Document successful prompts

---

## Contributing

To add new prompts:

1. Test the prompt thoroughly
2. Document usage and context
3. Provide examples
4. Include customization guidelines
5. Submit for review
