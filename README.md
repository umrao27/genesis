# Genesis

> **AI Workspace for Engineering Teams**

Genesis is an AI-powered engineering workspace that transforms product ideas into production-ready engineering assets.

Instead of starting with empty documents, teams describe their product idea and Genesis generates the technical foundation required to begin development.

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/<your-org>/genesis.git
cd genesis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start PostgreSQL (Docker)

```bash
docker compose up -d
```

Verify Docker is running:

```bash
docker ps
```

### 4. Configure environment variables

Create a `.env` file.

```env
DATABASE_URL="postgresql://genesis:genesis123@localhost:5432/genesis?schema=public"
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Run database migrations

```bash
npx prisma migrate dev
```

### 7. Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## ✨ Features

Genesis focuses on engineering rather than branding.

Current capabilities include:

- 🔐 Authentication
- 🏢 Workspace Management
- 📘 AI Blueprint Generation
- 🏗️ System Architecture
- 🗄️ Database Design
- 🔌 API Design
- 📄 Architecture Decision Records (ADR)
- ✅ Engineering Task Generation
- 📚 Technical Documentation

Future releases will include:

- GitHub Integration
- VS Code Extension
- AI Coding Assistant
- Team Collaboration
- CI/CD Automation
- Deployment Support

---

# Product Vision

Building software should begin with engineering, not boilerplate.

Genesis provides a single workspace where ideas evolve into implementation-ready software projects.

```
Idea
      │
      ▼
Blueprint
      │
      ▼
Architecture
      │
      ▼
Database Design
      │
      ▼
API Design
      │
      ▼
ADR
      │
      ▼
Tasks
      │
      ▼
Implementation
```

---

# Architecture Overview

Genesis follows a **Layered Modular Monolith** architecture.

```
┌─────────────────────┐
│      Browser        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Next.js App Router  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Pages / Layouts     │
│ Server Actions      │
│ Route Handlers      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Domain Services     │
└──────────┬──────────┘
           │
           ▼
┌──────────────────────────────────┐
│ AI │ GitHub │ Database │ Storage │
└──────────────────────────────────┘
```

Each layer has a single responsibility.

| Layer                     | Responsibility                       |
| ------------------------- | ------------------------------------ |
| **App Router**            | Routing and rendering                |
| **Pages**                 | User interface                       |
| **Server Actions / APIs** | Request orchestration                |
| **Services**              | Business logic                       |
| **Lib**                   | Shared infrastructure                |
| **Prisma**                | Database access                      |
| **Providers**             | AI, GitHub and external integrations |

---

# Project Structure

```text
genesis
│
├── app/
│   ├── (marketing)/               Public website
│   ├── (auth)/                    Authentication
│   ├── (app)/                     Protected application
│   │
│   ├── dashboard/
│   ├── settings/
│   │
│   └── workspace/
│       ├── create/
│       └── [workspaceId]/
│           ├── blueprint/
│           ├── architecture/
│           ├── database-design/
│           ├── api-design/
│           ├── adr/
│           ├── tasks/
│           ├── documents/
│           └── settings/
│
├── api/                           Route handlers
│
├── architecture/                  ADRs & system architecture
│
├── assets/                        Images and design assets
│
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
│
├── docs/                          Product documentation
├── hooks/
├── lib/
├── prisma/
├── public/
├── scripts/
├── services/
├── styles/
├── tests/
├── types/
│
├── middleware.ts
├── package.json
└── README.md
```

---

# Request Flow

```
Browser
    │
    ▼
App Router
    │
    ▼
Page / Server Action
    │
    ▼
Route Handler
    │
    ▼
Domain Service
    │
 ┌──┴─────────────┐
 ▼                ▼
Database      AI Provider
```

---

# Engineering Principles

Genesis follows a small set of engineering principles.

## Workspace First

Everything belongs to a workspace.

```
Workspace
    ├── Blueprint
    ├── Architecture
    ├── Database Design
    ├── API Design
    ├── ADR
    ├── Tasks
    └── Documents
```

---

## Documentation Driven

Engineering documentation is generated before implementation begins.

```
Requirements

↓

Architecture

↓

Database

↓

API

↓

Tasks

↓

Code
```

---

## Modular Architecture

Presentation, business logic and integrations remain independent.

```
UI

↓

Services

↓

Infrastructure
```

---

## AI Assisted

AI generates engineering assets while developers remain in control of every decision.

---

# Technology Stack

| Category       | Technology   |
| -------------- | ------------ |
| Framework      | Next.js 15   |
| Language       | TypeScript   |
| Styling        | Tailwind CSS |
| UI             | shadcn/ui    |
| Database       | PostgreSQL   |
| ORM            | Prisma       |
| Authentication | Better Auth  |
| AI             | OpenAI SDK   |
| Deployment     | Vercel       |

---

# Getting Started

## Prerequisites

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Production Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

# Documentation

Genesis documentation is organised by topic.

| Category            | Location                       |
| ------------------- | ------------------------------ |
| 🚀 Setup Guides     | `docs/setup/`                  |
| 🏗️ Architecture     | `docs/architecture/`           |
| 🔐 Authentication   | `docs/setup/04_Better-Auth.md` |
| 🗄️ Database         | `docs/setup/03_Prisma.md`      |
| 🧩 API Design       | `docs/api/`                    |
| 🎨 UX Documentation | `docs/ux/`                     |
| 📖 ADRs             | `architecture/adr/`            |

---

# Roadmap

## Phase 1

- Authentication
- Workspace Management
- AI Blueprint

## Phase 2

- Architecture Generation
- Database Design
- API Design
- ADR Generation

## Phase 3

- GitHub Integration
- Markdown Editor
- Export

## Phase 4

- AI Coding Assistant
- VS Code Extension
- Team Collaboration

---

# License

MIT
