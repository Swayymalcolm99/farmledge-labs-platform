# farmledge-platform

Private monorepo for Farmledge — agricultural inventory finance on Stellar.

## Apps

| App | Description | Dev URL |
|-----|-------------|---------|
| `apps/api` | Backend REST API (Express + PostgreSQL) | http://localhost:3000 |
| `apps/custodian` | Custodian dashboard (React + Vite) | http://localhost:5173 |
| `apps/farmer` | Farmer web app / PWA (React + Vite) | http://localhost:5174 |
| `apps/lender` | Lender portal (React + Vite) | http://localhost:5175 |

## Packages

| Package | Description |
|---------|-------------|
| `packages/shared` | Shared TypeScript types and utilities |

## Setup

### Prerequisites
- Node.js >= 20
- npm >= 10
- Docker + Docker Compose

### Install

```bash
npm install
```

### Start infrastructure

```bash
docker-compose -f infrastructure/docker-compose.yml up -d
```

### Environment

Copy `.env.example` in `apps/api` and fill in values:

```bash
cp apps/api/.env.example apps/api/.env
```

### Run apps

```bash
# API
npm run --workspace=apps/api dev

# Custodian dashboard
npm run --workspace=apps/custodian dev

# Farmer app
npm run --workspace=apps/farmer dev

# Lender portal
npm run --workspace=apps/lender dev
```

## Monorepo Structure

```
farmledge-platform/
├── apps/
│   ├── api/          # Express API
│   ├── custodian/    # Custodian React app
│   ├── farmer/       # Farmer React PWA
│   └── lender/       # Lender React app
├── packages/
│   └── shared/       # Shared types & utils
├── infrastructure/
│   ├── docker-compose.yml
│   └── nginx/
└── .github/
    └── workflows/
```

## Tech Stack

- **Backend**: Node.js 20, Express, PostgreSQL, Stellar SDK, Zod, Pino
- **Frontend**: React 18, Vite, Tailwind CSS, Stellar SDK
- **Infra**: Docker, PostgreSQL 16, Redis 7, Nginx
- **Blockchain**: Stellar Network
