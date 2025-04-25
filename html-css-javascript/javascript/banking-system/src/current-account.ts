import { Account } from "./account";

export class CurrentAccount extends Account {
  constructor(accountHolderName: string) {
    super(accountHolderName);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: "Withdrawn from current account",
    });
  }
}
