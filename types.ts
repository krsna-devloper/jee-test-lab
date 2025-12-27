
export enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '×',
  DIVIDE = '÷',
  ALGEBRA_LINEAR = 'solve',
  FACTORIAL = '!',
  PERMUTATION = 'P',
  COMBINATION = 'C',
  TWO_STEP_ARITHMETIC = 'multi',
}

export interface MathProblem {
  num1: number;
  num2: number;
  num3?: number;
  operation: Operation;
  displayProblem: string;
  answer: number;
}

export type GameMode = 'practice' | 'timed';
export type GameState = 'start' | 'playing' | 'gameOver';
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Theme = 'light' | 'dark';

export interface ProblemHistoryEntry {
  problemDisplay: string;
  operation: Operation;
  level: DifficultyLevel;
  answeredCorrectly: boolean;
  timestamp: number;
}

export type SoundType = 'start' | 'countdown' | 'timesup' | 'correct' | 'incorrect';

export type AppView = 'mainMenu' | 'mentalCalculation' | 'testSection' | 'reportsSection' | 'settings';

// --- TestSection Types ---
export type TestPhase = 'setup' | 'running' | 'finished';
export type TestMode = 'alpha' | 'beta';
export type TimerOption = 'countdown' | 'stopwatch';
export type QuestionLogEntryStatus = 'C' | 'I' | 'U' | null;

export interface QuestionLogEntry {
  id: number;
  timeTakenSeconds: number | null;
  isFlagged?: boolean; 
  isVisited?: boolean; 
  alphaStatus?: QuestionLogEntryStatus; 
  betaSelectedOptions?: string[]; 
}

export interface TestReportSummary {
  correctCount: number;
  incorrectCount: number;
  unsureCount: number;
  answeredCount: number;
  totalQuestions: number;
  flaggedCount: number;
}

export interface TestReport {
  id: string;
  testName: string;
  date: number;
  documentFileName: string | null;
  documentMimeType: string | null;
  documentDataUrl: string | null;
  testMode: TestMode;
  betaNumberOfOptions?: number;
  timerOption: TimerOption;
  initialDurationSeconds: number | null;
  timeTakenSeconds: number;
  numQuestionsConfigured: number;
  questionLog: QuestionLogEntry[];
  summary: TestReportSummary;
}

export interface CountdownTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}
