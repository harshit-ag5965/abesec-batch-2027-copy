export type TodoStatus = "Todo" | "In Progress" | "Blocker" | "Completed";
export type TodoDifficulty = "Easy" | "Medium" | "Hard";
export type TodoPriority = "P0" | "P1" | "P2";

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  dueDate: Date;
  difficulty: TodoDifficulty;
  priority: TodoPriority;
}
