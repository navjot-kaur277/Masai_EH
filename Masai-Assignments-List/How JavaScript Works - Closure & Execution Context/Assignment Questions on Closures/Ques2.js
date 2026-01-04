// Task 1: Implement createBankAccount Function
function createBankAccount() {
    let balance = 0;
    let transactionHistory = []; 

    return {
        deposit: function(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log("Deposited:", amount);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log("Withdrawn:", amount);
            } else {
                transactionHistory.push(`Failed withdrawal: ${amount}`);
                console.log("Insufficient balance");
            }
        },
        checkBalance: function() {
            console.log("Current balance:", balance);
        },
        getHistory: function() {
            console.log("Transaction History:", transactionHistory);
        }
    };
}

// Example Usage
const account = createBankAccount();
account.deposit(500);  
account.withdraw(200); 
account.withdraw(400); 
console.log(account.balance); 

// Task 2: How Closures Ensure balance Is Private
// Closures allow inner functions to access variables from their outer scope even after the outer function has returned. In this case:

// 1) balance is declared inside createBankAccount, making it inaccessible from outside.

// 2) Only the returned methods (deposit, withdraw, etc.) can interact with balance.

// 3) This encapsulation ensures balance remains private and protected from direct modification.

// Task 3: Adding transactionHistory with Closures
// The transactionHistory array is also enclosed within the createBankAccount function. Like balance, it is:

// 1) Hidden from external access.

// 2) Modified only through the methods provided (deposit, withdraw, getHistory).

// 3) This demonstrates how closures can maintain multiple private states and behaviors within a single function.