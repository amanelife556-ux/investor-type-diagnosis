export type AxisKey = "risk" | "horizon" | "involvement" | "reward";

export type Axis = {
  label: string;
  description: string;
  left: string;
  right: string;
  negativeCode: string;
  positiveCode: string;
};

export type Choice = {
  text: string;
  value: -1 | 1;
};

export type Question = {
  axis: AxisKey;
  text: string;
  choices: Choice[];
};

export type InvestorType = {
  role: string;
  mark: string;
  motif: string;
  line: string;
  shareLine: string;
  summary: string;
  preferredMethods: string[];
  strength: string;
  watchout: string;
  colors: [string, string];
};

export type Scores = Record<AxisKey, number>;
