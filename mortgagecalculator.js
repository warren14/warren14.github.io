let loanAmount = Number(document.querySelector('#loanAmount').value);
console.log(loanAmount, typeof(loanAmount));
const  years = Number(document.querySelector('#years').value);
console.log(years, typeof(years));
const interest = Number(document.querySelector('#interest').value);
console.log(interest, typeof(interest));
let payment = 0; 

const calculateDebtLeft = function (loanAmount, years, interest, payment) 
 {for (let i = 1; i < years+1; i++)
        {loanAmount = loanAmount * interest - payment}
        return(loanAmount)};

const updatePayment = function (payment) {return payment + 1};

// // Total Payment
const monthlyPayment = function (loanAmount, years, interest, payment) 
{let leftDebt = loanAmount; let minimumPayment = [];
let totalInterestPaid = 0;
    while (leftDebt > 0) {
    payment = updatePayment(payment); 
    leftDebt = calculateDebtLeft (loanAmount, years, interest, payment);
}
 return payment / 12
};

const yearlyPayment = function (loanAmount, years, interest, payment) 
{let leftDebt = loanAmount; let minimumPayment = [];
let totalInterestPaid = 0;
    while (leftDebt > 0) {
    payment = updatePayment(payment); 
    leftDebt = calculateDebtLeft (loanAmount, years, interest, payment);
}
 return payment
};

// Debt Left
const amountLeft = function (loanAmount, years, interest, payment) 
{let leftDebt = loanAmount; let minimumPayment = [];
let totalInterestPaid = 0;
    while (leftDebt > 0) {
    payment = updatePayment(payment); 
    leftDebt = calculateDebtLeft (loanAmount, years, interest, payment);
}
return leftDebt};

// Total Interest
const interestPaid = function (loanAmount, years, interest, payment) 
{let leftDebt = loanAmount; let minimumPayment = [];
let totalInterestPaid = 0;
    while (leftDebt > 0) {
    payment = updatePayment(payment); 
    leftDebt = calculateDebtLeft (loanAmount, years, interest, payment);
    totalInterestPaid = payment * years - loanAmount} 
    return totalInterestPaid};



document.querySelector('#calculate').addEventListener('click',
function() {
let loanAmount = Number(document.querySelector('#loanAmount').value);
let  years = Number(document.querySelector('#years').value);
let interest = 1 + (Number(document.querySelector('#interest').value)/100);
let payment = 0; 
console.log(loanAmount, years, interest, payment, typeof (loanAmount, years, interest, payment));

const myMonthlyPayment = monthlyPayment(loanAmount, years, interest, payment);
console.log(myMonthlyPayment);
document.querySelector('#monthlyPayment').value = myMonthlyPayment;

const myYearlyPayment = yearlyPayment(loanAmount, years, interest, payment);
console.log(myYearlyPayment);
document.querySelector('#yearlyPayment').value = myYearlyPayment;

const totalInterest = interestPaid(loanAmount, years, interest, payment);
console.log(totalInterest);
document.querySelector('#totalInterest').value = totalInterest;

const totalDebt = amountLeft(loanAmount, years, interest, payment);
console.log(totalDebt);
});



















