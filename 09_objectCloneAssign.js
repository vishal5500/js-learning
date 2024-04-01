

const bankSbi = {
    name : "Vishal Gurav",
    bankName : "State Bank Of India",
    brach : "Kolhapur",
    ifscCode : 123456,
    contactNo : 1234567890,
    ROI : 7.5 
}

const bankLocation = {
    street : "ch.Shivaji Maharaj Road",
    city : "Pune",
    pin : 123456,
}
console.log(bankSbi);
console.log(bankLocation);
console.log(`=====Clonning======`);
const mergedObject = Object.assign({}, bankSbi, bankLocation);
console.log(mergedObject);

const rateOfInterest = {
    homeLoanInterest : "8.5 %",
    personalLoanInterest : "8%",
    duelInterest : "9 %",

}


console.log(`========Merge all========`);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
//console.table(sbiDetails);
console.table(Object.assign({},bankSbi,bankLocation,rateOfInterest));

console.log(`======Transverse object using For in loop========`);
for (const key in sbiDetails) {
    console.log(`${key} : ${sbiDetails[key]}`);
        
    }

