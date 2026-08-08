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

export type AccessRequest = {
  id: string;
  name: string;
  email: string;
  focus: string;
  createdAt: string;
};
