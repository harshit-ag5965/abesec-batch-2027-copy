import { Account } from "./account";
import { InterestCalculable } from "./interest-calculable";

export class FixedDepositAccount extends Account implements InterestCalculable {
  private maturityDate: Date;
  private interestRate: number;
  constructor(accountHolderName: string, years: number) {
    super(accountHolderName);
    this.maturityDate = new Date();
    this.interestRate = 0.07;
    this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years);
  }

  withdraw(amount: number): void {
    if (new Date() < this.maturityDate) {
      throw new Error("Cannot withdraw before maturity date");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: "Withdrawn from fixed deposit account",
    });
  }

  calculateInterest(): number {
    const years =
      (this.maturityDate.getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24 * 365);
    return this.balance * this.interestRate * years;
  }
}
