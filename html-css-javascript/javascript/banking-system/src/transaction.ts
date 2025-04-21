export interface Transaction {
  type: "DEPOSIT" | "WITHDRAW" | "TRANSFER";
  amount: number;
  timestamp: Date;
  description?: string;
}
