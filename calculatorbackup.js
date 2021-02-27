const mortgageCalculator = {

    initiate: function () {
    this.loanAmount = Number(document.querySelector('#loanAmount').value);
    this.interest = (Number(document.querySelector('#interest').value)/100) + 1;
    this.payment = 0;
    this.years = Number(document.querySelector('#years').value)},

 calculateDebtLeft: function () 
 {let debt = this.loanAmount; for (let i = 1; i < this.years+1; i++)
        {debt = debt * this.interest - this.payment}
        return debt},

updatePayment : function () {this.payment = this.payment + 1; return this.payment},
 
yearlyPayment : function () 
{this.leftDebt = this.loanAmount;
    while (this.leftDebt > 0) {
    this.payment = this.updatePayment(); 
    this.leftDebt = this.calculateDebtLeft();
    this.totalInterestPaid = this.payment * this.years - this.loanAmount;
    this.monthlyPayment = this.payment / 12;
}}
};


document.querySelector('#calculate').addEventListener('click', function(){
    mortgageCalculator.initiate();
    mortgageCalculator.yearlyPayment();

    const myYearlyPayment = mortgageCalculator.payment;
    console.log(myYearlyPayment);
    document.querySelector('#yearlyPayment').value = myYearlyPayment;
    
    const totalInterest = mortgageCalculator.totalInterestPaid;
    document.querySelector('#totalInterest').value = totalInterest;
    console.log(mortgageCalculator.totalInterestPaid);

    const monthlyPayment = mortgageCalculator.monthlyPayment;
    document.querySelector('#monthlyPayment').value = monthlyPayment;
    console.log(mortgageCalculator.monthlyPayment);

    console.log(mortgageCalculator.leftDebt);
    console.log(mortgageCalculator);
}
);

document.addEventListener('keydown', function(event){
   if (event.key === 'Enter') {
    mortgageCalculator.initiate();
    mortgageCalculator.yearlyPayment();

    const myYearlyPayment = mortgageCalculator.payment;
    console.log(myYearlyPayment);
    document.querySelector('#yearlyPayment').value = myYearlyPayment;
    
    const totalInterest = mortgageCalculator.totalInterestPaid;
    document.querySelector('#totalInterest').value = totalInterest;
    console.log(mortgageCalculator.totalInterestPaid);

    const monthlyPayment = mortgageCalculator.monthlyPayment;
    document.querySelector('#monthlyPayment').value = monthlyPayment;
    console.log(mortgageCalculator.monthlyPayment);

    console.log(mortgageCalculator.leftDebt);
    console.log(mortgageCalculator);
console.log(event)}
}
);

