import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Blocks,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  KeyRound,
  Layers3,
  Network,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TimerReset,
  WalletCards,
  Zap
} from "lucide-react";
import { AgentEvent, ComponentItem, Metric, getOverview, requestAccess } from "./api";

const fallbackMetrics: Metric[] = [
  { label: "Algorand finality", value: "3.3s", detail: "Fast settlement for finance workflows" },
  { label: "Network fee", value: "~0.001 ALGO", detail: "Low-cost machine payments" },
  { label: "Commerce layer", value: "x402-ready", detail: "Programmable paid access" }
];

const fallbackComponents: ComponentItem[] = [
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

const fallbackEvents: AgentEvent[] = [
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

export default function App() {
  const [metrics, setMetrics] = useState<Metric[]>(fallbackMetrics);
  const [components, setComponents] = useState<ComponentItem[]>(fallbackComponents);
  const [events, setEvents] = useState<AgentEvent[]>(fallbackEvents);
  const [form, setForm] = useState({ name: "", email: "", focus: "Agentic Payments" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    getOverview()
      .then((data) => {
        setMetrics(data.metrics);
        setComponents(data.components);
        setEvents(data.events);
      })
      .catch(() => setStatus("Backend API is offline. Showing local product data."));
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await requestAccess(form);
      setStatus(response.message);
      setForm({ name: "", email: "", focus: "Agentic Payments" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not submit request.");
    }
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Algorand Agentic Finance home">
          <span className="brandMark"><Blocks size={22} /></span>
          <span>Algo Agentic Finance</span>
        </a>
        <div className="navLinks">
          <a href="#components">Components</a>
          <a href="#commerce">Commerce</a>
          <a href="#access">Access</a>
        </div>
        <a className="navButton" href="#access">Build</a>
      </nav>

      <section id="top" className="hero">
        <div className="heroCopy">
          <span className="eyebrow"><Sparkles size={16} /> Algorand financial infrastructure</span>
          <h1>Connect traditional finance to programmable on-chain settlement.</h1>
          <p>
            Practical components for payments, tokenization, settlements, lending, and automated
            financial workflows powered by Algorand smart contracts.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#access">
              Start building <ArrowRight size={18} />
            </a>
            <a className="secondaryButton" href="#commerce">
              Agentic payments <Bot size={18} />
            </a>
          </div>
        </div>

        <section className="console" aria-label="Agentic payment flow">
          <div className="consoleHeader">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="agentCard">
            <Bot size={34} />
            <div>
              <strong>AI Agent Commerce Session</strong>
              <small>x402 request, payment proof, Algorand settlement</small>
            </div>
            <BadgeCheck className="verified" size={24} />
          </div>
          <div className="metricsGrid">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <small>{metric.label}</small>
                <strong>{metric.value}</strong>
                <span>{metric.detail}</span>
              </article>
            ))}
          </div>
          <div className="flowLine">
            <span>Bank/API</span>
            <i></i>
            <span>Algorand</span>
            <i></i>
            <span>AI agent</span>
          </div>
        </section>
      </section>

      <section className="trustBand">
        <div><TimerReset /> Instant finality</div>
        <div><CircleDollarSign /> Low transaction fees</div>
        <div><ShieldCheck /> Secure smart contracts</div>
        <div><KeyRound /> Paid access control</div>
      </section>

      <section id="components" className="section">
        <div className="sectionTitle">
          <span>Components</span>
          <h2>Infrastructure pieces for real financial workflows.</h2>
        </div>
        <div className="componentGrid">
          {components.map((item) => (
            <article className="componentCard" key={item.name}>
              <div className="cardTop">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
                <span className={`risk risk${item.risk}`}>{item.risk}</span>
              </div>
              <p>{item.purpose}</p>
              <div className="cardMeta">
                <span>{item.status}</span>
                <CheckCircle2 size={18} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="commerce" className="commerceSection">
        <div>
          <span className="eyebrow"><Bot size={16} /> Agentic Commerce</span>
          <h2>Autonomous agents can transact, negotiate, and verify commerce on-chain.</h2>
          <p>
            x402-style payment flows make paid APIs, data, compute, digital content, and service
            agreements available to AI agents without constant human intervention.
          </p>
          <div className="featureList">
            <div><ReceiptText /> Payment-required API responses</div>
            <div><WalletCards /> Agent wallets and delegated spend</div>
            <div><Network /> Machine-to-machine marketplaces</div>
            <div><Zap /> Automated settlement triggers</div>
            <div><FileCheck2 /> Verifiable service agreements</div>
            <div><Banknote /> Lending and finance automation</div>
          </div>
        </div>
        <aside className="activityPanel">
          <h3>Agent payment activity</h3>
          {events.map((item) => (
            <div className="activityItem" key={item.title}>
              <span></span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </aside>
      </section>

      <section id="access" className="accessSection">
        <div>
          <span className="eyebrow"><Layers3 size={16} /> Developer layer</span>
          <h2>Build open finance tools where Web2 systems and Web3 apps work together.</h2>
          <p>
            Use this starter as the foundation for Algorand payment rails, asset workflows,
            agent marketplaces, and smart-contract-backed financial automation.
          </p>
        </div>
        <form className="accessForm" onSubmit={onSubmit}>
          <label>
            Name
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Algorand Builder"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Focus
            <select value={form.focus} onChange={(event) => setForm({ ...form, focus: event.target.value })}>
              <option>Agentic Payments</option>
              <option>Asset Tokenization</option>
              <option>Settlement Automation</option>
              <option>Lending Infrastructure</option>
              <option>Web2 Finance Integration</option>
            </select>
          </label>
          <button type="submit">
            Request access <ArrowRight size={18} />
          </button>
          {status && <p className="formStatus">{status}</p>}
        </form>
      </section>
    </main>
  );
}
