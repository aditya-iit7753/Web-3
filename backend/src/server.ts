import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { components, events, metrics } from "./data.js";
import type { AccessRequest } from "./types.js";

const app = express();
const port = Number(process.env.PORT ?? 4000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";
const requests: AccessRequest[] = [];

const accessSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  focus: z.string().min(2).max(80)
});

app.use(helmet());
app.use(cors({ origin: [frontendUrl, "http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "algorand-agentic-finance-api" });
});

app.get("/api/overview", (_request, response) => {
  response.json({ metrics, components, events });
});

app.post("/api/access", (request, response) => {
  const result = accessSchema.safeParse(request.body);

  if (!result.success) {
    response.status(400).json({ message: "Please provide a valid name, email, and focus area." });
    return;
  }

  const duplicate = requests.some((entry) => entry.email.toLowerCase() === result.data.email.toLowerCase());
  if (duplicate) {
    response.status(409).json({ message: "This email already requested access." });
    return;
  }

  requests.push({
    id: randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString()
  });

  response.status(201).json({ message: "Access request received. Build the future of agentic finance." });
});

app.get("/api/access/count", (_request, response) => {
  response.json({ count: requests.length });
});

app.post("/api/x402/verify", (request, response) => {
  const paymentHeader = request.header("x-payment");

  if (!paymentHeader) {
    response.status(402).json({
      message: "Payment required",
      network: "algorand",
      asset: "ALGO",
      instruction: "Attach an x-payment header after on-chain payment proof is created."
    });
    return;
  }

  response.json({
    verified: true,
    network: "algorand",
    settlement: "instant-finality",
    paymentReference: paymentHeader
  });
});

app.use((_request, response) => {
  response.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Algorand Agentic Finance API running on http://localhost:${port}`);
});
