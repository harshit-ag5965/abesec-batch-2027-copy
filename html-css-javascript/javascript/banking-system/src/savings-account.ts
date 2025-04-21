import { Account } from "./account";
import { InterestCalculable } from "./interest-calculable";

export class SavingsAccount extends Account implements InterestCalculable {
  protected withdrawlLimit: number;
  private interestRate: number;
  constructor(accountHolderName: string) {
    super(accountHolderName);
    this.interestRate = 0.04;
    this.withdrawlLimit = 100000;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }

    if (amount > 1000000) {
      throw new Error("Withdrawal limit exceeded");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: "Withdrawn from savings account",
    });
  }

  updateWithdrawlLimit(newLimit: number): void {
    if (newLimit < 0) {
      throw new Error("Withdrawal limit must be positive");
    }
    if (newLimit > 1000000) {
      throw new Error("Withdrawal limit cannot exceed 1,000,000");
    }
    this.withdrawlLimit = newLimit;
  }

  calculateInterest(): number {
    return this.balance * this.interestRate;
  }
}
