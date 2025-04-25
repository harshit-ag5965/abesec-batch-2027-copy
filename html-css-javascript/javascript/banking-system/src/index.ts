import { Account } from "./account";
import { Bank } from "./bank";
import { FixedDepositAccount } from "./fixed-deposit-account";

var pnbBank: Bank = new Bank();
var account: Account = pnbBank.createAccount("John Doe", "SAVINGS");
account.deposit(1000);
console.log(account.getBalance());

var account = pnbBank.createAccount("John Doe", "FIXED_DEPOSIT", 5);
account.deposit(100000);
console.log(account.getBalance());
