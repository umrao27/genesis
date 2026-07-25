# Forgot Password

## Overview

The forgot password page allows users to reset their password if they have forgotten it.

---

## User Flow

1. User navigates to forgot password page
2. User enters email address
3. System validates email exists
4. Password reset link is sent to email
5. User receives email with reset link
6. User clicks reset link in email
7. User is redirected to password reset page

---

## UI Components

### Header

- Logo
- "Back to login" link

### Form Fields

- Email input

### Buttons

- Send reset link button (primary)
- Back to login link (secondary)

### Messages

- Instructional message
- Success message
- Error message

---

## Validation Rules

- Email format validation
- Email exists in system

---

## Error States

- Email not found
- Invalid email format
- Account not activated
- Server error
- Too many reset requests

---

## Success State

- Show confirmation message
- Inform user to check email
- Provide option to go back to login

---

## Email Content

- Reset link with expiration time
- Instructions for password reset
- Security warning
- Support contact information

---

## Security Considerations

- HTTPS only
- Reset link expiration (24 hours)
- One-time use links
- Rate limiting
- Email verification
- CSRF protection
