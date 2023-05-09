// class BankAccount {
//   public id: number;
//   public name: string;
//   private _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }
//   //getter
//   get balance(): number {
//     return this._balance;
//   }

//   //setter
//   set SetDeposit(amount: number) {
//     this._balance = this._balance + amount;
//   }

//   getBalance(): number {
//     return this._balance;
//   }

//   deposit(amount: number) {
//     this._balance = this._balance + amount;
//   }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     //   this.deposit;
//   }
// }

// const myAccount = new BankAccount(111, "Abir", 3000);
// //   console.log(myAccount);
// console.log(myAccount.balance);
// myAccount.SetDeposit = 20;
// console.log(myAccount.balance);
