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
    let EnterAmount = +amount;
    if (amount <= 0 || amount === "") {
        showBln.textContent = "enter valid amount"
    } else {
        
    } 
})