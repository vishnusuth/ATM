const EnterAmount =  document.getElementById("enter-amount");
const WITHDRAW = document.getElementById("WITHDRAW");
const BalChk = document.getElementById("Bal-chk");
const deposit = document.getElementById("DEPOSIT");
const showBln = document.getElementById("show-bln");

let balance = 1000;
deposit.addEventListener("click",function(){
    // get input
    let amount = EnterAmount.value;
    // convert into number
    amount = +amount;
    if (amount <= 0 ) {
        showBln.textContent = "enter valid amount"
    } else {
        balance = balance + amount;
        showBln.textContent = "₹" + amount + " deposited | Total: ₹" + balance;
        EnterAmount.value = "";
    } 
})

WITHDRAW.addEventListener("click",function(){
    let amount = EnterAmount.value;
    amount = +amount;
    if (amount <= 0) {
        showBln.textContent = "enter valid amount"
    } else if(amount > balance){
        showBln.textContent = "Insufficient Balance"
    }   else {
        balance = balance - amount;
        showBln.textContent = `₹${amount} withdraw And Total balance ₹${balance}`;
    }
    EnterAmount.value = "";
})

BalChk.addEventListener("click",function(){
    showBln.textContent = `Your Balance ${balance}`
})