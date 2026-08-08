# Algorand Agentic Finance

A full-stack website for Algorand financial infrastructure, x402-style agentic payments, and Web2-to-Web3 finance workflows.

## What It Includes

- React + Vite frontend
- Express + TypeScript backend
- Algorand finance infrastructure product UI
- x402 / agentic payments commerce flow
- API routes for overview data, agent payments, and waitlist capture
- Vercel config for frontend deployment
- Railway config for backend deployment

## Run Locally

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:4000`

## Deploy

Deploy `frontend/` to Vercel.

Set this Vercel environment variable:

```bash
VITE_API_URL=https://your-railway-backend-url
```

Deploy `backend/` to Railway.

Set this Railway environment variable:

```bash
FRONTEND_URL=https://your-vercel-frontend-url
```
