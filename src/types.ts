export type AxisKey = "stability" | "collaboration" | "planning" | "future";

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

export type ShowaEmployeeType = {
  role: string;
  mark: string;
  line: string;
  shareLine: string;
  summary: string;
  survivalStrategy: string;
  reputation: string;
  ngMoves: string[];
  acquittalPoints: string[];
  returnMemo: string;
  subCharges: string[];
  ngScore: number;
  ngScoreComment: string;
  tags: string[];
  allyType: string;
  enemyType: string;
  colors: [string, string];
};

export type Scores = Record<AxisKey, number>;
