'use strict';

const DEFAULT_BALANCE = 0;

class BankAccount {

  constructor() {
      this.balance = DEFAULT_BALANCE
  }

  getCurrentBalance() {
    return this.balance;
  };

  deposit(amount) {
    this.balance += amount;
  };

  withdraw(amount) {
    this.balance -= amount;
  };



}

