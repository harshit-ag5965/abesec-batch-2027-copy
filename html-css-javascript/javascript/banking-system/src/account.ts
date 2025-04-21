import { Transaction } from "./transaction";

export abstract class Account {
  protected balance: number;
  protected accountNumber: string;
  protected accountHolderName: string;
  protected transactions: Transaction[];
  constructor(accountHolderName: string) {
    this.accountHolderName = accountHolderName;
    this.balance = 0;
    this.accountNumber = Account.generateAccountNumber();
    this.transactions = [];
  }

  static generateAccountNumber(): string {
    return Math.floor(Math.random() * 1000000000).toString();
  }

  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
    this.transactions.push({
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date(),
      description: "Deposited for my savings",
    });
  }

  abstract withdraw(amount: number): void;

  getTransactionHistory(): Transaction[] {
    return this.transactions;
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getAccountHolderName(): string {
    return this.accountHolderName;
  }
}
