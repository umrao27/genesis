# Docker, PostgreSQL & Prisma Setup

## Overview

Genesis uses a local PostgreSQL database running inside Docker for development.

The application accesses PostgreSQL through Prisma ORM.

```
Next.js
      │
      ▼
Prisma ORM
      │
      ▼
PostgreSQL
      │
      ▼
Docker Container
```

---

# Why Docker?

Instead of installing PostgreSQL directly on the operating system, Genesis uses Docker.

Benefits:

- Consistent development environment
- Easy onboarding
- Easy reset
- Matches production architecture
- No local PostgreSQL installation required
- Portable across macOS, Windows and Linux

---

# Prerequisites

Install:

- Node.js 22+
- Docker Desktop
- Git

Verify installation.

```bash
node -v
npm -v
docker version
docker compose version
```

Docker should display both:

```
Client
Server
```

---

# Project Structure

```
genesis
│
├── docker-compose.yml
├── prisma/
├── app/
├── lib/
├── components/
└── .env
```

---

# Docker Compose

Create

```
docker-compose.yml
```

```yaml
services:
  postgres:
    image: postgres:17
    container_name: genesis-postgres

    restart: unless-stopped

    environment:
      POSTGRES_DB: genesis
      POSTGRES_USER: genesis
      POSTGRES_PASSWORD: genesis123

    ports:
      - "5432:5432"

    volumes:
      - postgres_data:/var/lib/postgresql/data

    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U genesis -d genesis"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

---

# Start PostgreSQL

```bash
docker compose up -d
```

Verify.

```bash
docker ps
```

Expected output:

```
genesis-postgres
postgres:17
```

---

# Stop PostgreSQL

```bash
docker compose down
```

---

# Remove Database

Deletes the PostgreSQL volume.

```bash
docker compose down -v
```

---

# View Logs

```bash
docker logs genesis-postgres
```

Expected:

```
database system is ready to accept connections
```

---

# Install Prisma

Install Prisma ORM.

```bash
npm install prisma@6 @prisma/client@6
```

---

# Initialize Prisma

```bash
npx prisma init
```

Creates:

```
prisma/
    schema.prisma

.env
```

---

# Configure Environment Variables

Update `.env`.

```env
DATABASE_URL="postgresql://genesis:genesis123@localhost:5432/genesis?schema=public"
```

---

# Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

# Generate Prisma Client

```bash
npx prisma generate
```

Expected:

```
✔ Generated Prisma Client
```

---

# Create Migration

Example schema:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}
```

Run migration.

```bash
npx prisma migrate dev --name init
```

Creates:

```
prisma/
    migrations/
```

---

# Prisma Studio

Open database UI.

```bash
npx prisma studio
```

Runs at:

```
http://localhost:5555
```

---

# Useful Prisma Commands

Generate client.

```bash
npx prisma generate
```

Create migration.

```bash
npx prisma migrate dev
```

Deploy migrations.

```bash
npx prisma migrate deploy
```

Open Studio.

```bash
npx prisma studio
```

Reset database.

```bash
npx prisma migrate reset
```

Push schema without migrations.

```bash
npx prisma db push
```

---

# Useful Docker Commands

Start containers.

```bash
docker compose up -d
```

Stop containers.

```bash
docker compose down
```

Restart.

```bash
docker compose restart
```

List running containers.

```bash
docker ps
```

View logs.

```bash
docker logs genesis-postgres
```

Open PostgreSQL shell.

```bash
docker exec -it genesis-postgres psql -U genesis
```

---

# Troubleshooting

## Docker daemon not running

```
Cannot connect to the Docker daemon
```

Solution:

- Open Docker Desktop
- Wait until Docker Engine is running

---

## PostgreSQL connection failed

Verify Docker.

```bash
docker ps
```

Verify DATABASE_URL.

```
DATABASE_URL="postgresql://genesis:genesis123@localhost:5432/genesis?schema=public"
```

---

## Prisma Client not generated

Run.

```bash
npx prisma generate
```

---

## Database reset

```bash
docker compose down -v

docker compose up -d

npx prisma migrate reset
```

---

# Development Workflow

```
Start Docker
        │
        ▼
Start PostgreSQL
        │
        ▼
Generate Prisma Client
        │
        ▼
Run Migrations
        │
        ▼
Start Next.js
```

---

# Current Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Frontend       | Next.js 15              |
| Language       | TypeScript              |
| Database       | PostgreSQL 17           |
| ORM            | Prisma 6                |
| Container      | Docker Desktop          |
| Authentication | Better Auth (Next Step) |

---

# Next Module

After the database layer is complete:

- Better Auth
- Email Authentication
- GitHub OAuth
- Session Management
- Protected Routes
