import type { AgentEvent, ComponentItem, Metric } from "./types.js";

export const metrics: Metric[] = [
  { label: "Algorand finality", value: "3.3s", detail: "Fast settlement for finance workflows" },
  { label: "Network fee", value: "~0.001 ALGO", detail: "Low-cost machine payments" },
  { label: "Commerce layer", value: "x402-ready", detail: "Programmable paid access" }
];

export const components: ComponentItem[] = [
  {
    name: "Payment Gateway",
    category: "Web2 to Web3 payments",
    purpose: "Accept traditional payment intents and settle value through Algorand smart contracts.",
    status: "Integration layer",
    risk: "Low"
  },
  {
    name: "Asset Tokenization",
    category: "Real-world assets",
    purpose: "Issue auditable Algorand Standard Assets for receivables, funds, invoices, and collateral.",
    status: "Smart contract module",
    risk: "Low"
  },
  {
    name: "Agentic x402 Payments",
    category: "Machine commerce",
    purpose: "Let AI agents verify payment, unlock services, and settle API usage on-chain.",
    status: "Autonomous flow",
    risk: "Medium"
  }
];

export const events: AgentEvent[] = [
  {
    title: "Agent request authenticated",
    detail: "A service agent presented payment metadata before unlocking a paid API response.",
    time: "2 min ago"
  },
  {
    title: "Settlement finalized",
    detail: "Funds moved through an Algorand smart contract after agreement conditions were met.",
    time: "12 min ago"
  },
  {
    title: "Asset state updated",
    detail: "A tokenized invoice moved from pending to cleared with an auditable on-chain record.",
    time: "31 min ago"
  }
];
