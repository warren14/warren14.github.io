const mortgageCalculator = {

    inputLoanAmount: document.querySelector('#loanAmount'),
    inputInterest: document.querySelector('#interest'),
    inputYears: document.querySelector('#years'),
    outputMonthlyPayment:document.querySelector('#monthlyPayment'),
    outputYearlPayment: document.querySelector('#yearlyPayment'),
    outputInterestPaid:document.querySelector('#totalInterest'),


    initiate: function () {
    this.loanAmount = Number(this.inputLoanAmount.value);
    this.interest = (Number(this.inputInterest.value / 100) + 1);
    this.payment = 0;
    this.years = Number(this.inputYears.value)},

// onLoad: function () {console.log(this); 
// let cookieArray = []; if (document.cookie.length!=0) {
//     cookieArray = document.cookie.split('=');
//     console.log(this);
//     this.inputLoanAmount.value = cookieArray[1];}
// },

onLoad: function () {
let dc = document.cookie.split(';');
for (let str of dc) {if (str[0] === ' ') 
{str = str.slice(1)}; 
let [k, v] = str.split('='); if (k === 'loanAmount') 
{this.inputLoanAmount.value = v}}},


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


}},
runCalculator: function () {
    this.initiate();
    if (this.loanAmount <= 0 || this.interest === 1 || this.years <= 0)
    {document.querySelector('.warning').classList.remove('hidden')}

else{
    this.yearlyPayment();
    const myYearlyPayment = this.payment;
    this.outputYearlPayment.value = myYearlyPayment;

    const totalInterest = this.totalInterestPaid;
    this.outputInterestPaid.value = totalInterest;

    const monthlyPayment = this.monthlyPayment;
    this.outputMonthlyPayment.value = monthlyPayment;

    console.log(mortgageCalculator);
    console.log(this.leftDebt);
    console.log(this.monthlyPayment);
    console.log(this.payment);
    console.log(this.totalInterestPaid);
    document.querySelector('.outputs').classList.remove('hidden');
    //Need to add hidden to the Warning


}},
//Set cookie
calculatorCookie : function () {
    let loanValue = this.inputLoanAmount.value;
    document.cookie = 'loanAmount='+loanValue;
        }};

window.addEventListener('load', function ()
    {mortgageCalculator.onLoad()});

document.querySelector('#calculate').addEventListener('click', function(){
   mortgageCalculator.runCalculator();
   mortgageCalculator.calculatorCookie();
}
);

document.addEventListener('keydown', function(event){
   if (event.key === 'Enter') {
mortgageCalculator.runCalculator();
console.log(event)}
}
);

