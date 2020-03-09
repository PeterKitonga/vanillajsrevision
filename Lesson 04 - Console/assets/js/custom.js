var calculator_prompt = prompt('How much would you like to borrow');
var interest_rate = 0.045;
var principal_amount = parseInt(calculator_prompt);
var interest_amount = principal_amount * interest_rate;
var loan_amount = interest_amount + principal_amount

console.log("Principal: "+principal_amount);
console.log("Interest: "+interest_amount);
console.log("Loan Amount: "+loan_amount);