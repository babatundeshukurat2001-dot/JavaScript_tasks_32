let bankAccount = {
    owner: "Alice",
    balance: 500,

    deposit: function(amount) {
        bankAccount.balance = bankAccount.balance + amount;
    },

    withdraw: function(amount) {
        if (amount > bankAccount.balance) {
            console.log("Withdrawal failed: Insufficient funds");
            return false;
        } 
        else {
            bankAccount.balance = bankAccount.balance - amount;
            console.log("Withdrawal successful");
            return true;
        }
    }
};
bankAccount.deposit(1500); 
bankAccount.withdraw(2500); 
console.log("Final balance: " + bankAccount.balance);
