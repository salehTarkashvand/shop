
const labelLoanIntrest = document.getElementById('LoanIntrest');
const labelinstallment = document.getElementById('installment');
const labeltotalloanamount = document.getElementById('totalloanamount');
const labelamountOfInstallment = document.getElementById('amountOfInstallment');
// const prepayment = document.getElementById('prepayment');
//   
// let productCount = 3 ;
// let productprice = 3000 ;
// let credit = 1200;
// 
// 
// let buy = productCount > 0 && credit > productprice ;
// let hi = productCount+saleh() > 3 && credit > productprice ;
// function saleh(x){
// let a = 25; 
// let b = 26;
// let c = x +( a + b ) ;
// return c ;
// };
// console.log(buy);
// 
// console.log(saleh("saleh"))
// if(saleh(2)>50){
//     for(let i=0 ; i < 3 ; i++){
//         console.log("slm");
//      }
//      
// }
// else{
//     console.log("ridi")
//  }
// 
//  
// loan();
//debugger
function loan() {
    
    let loanInterest = (  GetLoanAmount()* GetIntrestRate() * GetNumberOfInstallments()) % 2400;
    let TotalLoanAmount = loanInterest + GetLoanAmount();
    let Installment =  TotalLoanAmount  % GetNumberOfInstallments();
    let AmountOfInstallment =  ( TotalLoanAmount - GetPrePayment() )  % GetNumberOfInstallments();
     dataLoan(loanInterest,Installment,TotalLoanAmount,AmountOfInstallment);
};

function GetNumberOfInstallments(){
    let NumberOfInstallments = document.getElementById('numberOfInstallments').value;

    return NumberOfInstallments;
}

function GetPrePayment() { 
    let Prepayment = document.getElementById('prepayment').value;
    return Prepayment ;
    // labelLoanIntrest.innerHTML="pish pardakht ="+ Prepayment;
};
function GetLoanAmount() {
    let LoanAmount = document.getElementById('loanAmount').value;
    return LoanAmount ;
};
function GetIntrestRate() {
    let InterestRate =document.getElementById('interestRate').value ;
    return InterestRate;
};

function dataLoan (loanInterest,Installment,TotalLoanAmount,AmountOfInstallment){
    labelLoanIntrest.innerHTML = "meghdar sod vam =" + loanInterest;
    labelinstallment.innerHTML = "mablagh har ghest =" + Installment;
    labeltotalloanamount.innerHTML = "mablagh vam b hesab krdan sod banki = " + TotalLoanAmount;
    labelamountOfInstallment.innerHTML = "mablagh har ghest ="+ AmountOfInstallment;
}