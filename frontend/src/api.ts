export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type ComponentItem = {
  name: string;
  category: string;
  purpose: string;
  status: string;
  risk: "Low" | "Medium" | "High";
};

export type AgentEvent = {
  title: string;
  detail: string;
  time: string;
};

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export function getOverview() {
  return getJson<{ metrics: Metric[]; components: ComponentItem[]; events: AgentEvent[] }>("/api/overview");
}

export async function requestAccess(payload: { name: string; email: string; focus: string }) {
  const response = await fetch(`${API_URL}/api/access`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Unable to submit request" }));
    throw new Error(error.message);
  }

  return response.json() as Promise<{ message: string }>;
}
