

let professor = {
    name : "Vishal",
    age : 28 ,
    city : "Kolhapur",
    pin : 112233,
    MobNo : 1234567989,
    degrees:{
        name: "Rahul",
        place:"Pune",
        engineering: "CSE",
        PHD : "Adv computing",
        collageName : "SGI",
},
    certificate : ["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv programming"]
}
console.log(`===========Adding Property=========`);
professor.totalExperience = "14 Years"
console.log(professor);
console.log(`=================`);
console.table(professor.degrees);
console.log(`=================`);
console.log(professor. certificate);
console.log(`=====Step 4 add ======`);
//const addElement = professor.certificate.splice(2,1,"a");
console.log(professor.certificate.splice(2,0,"Oracle certified"))
console.log(professor. certificate);

console.log(`========Step 5=========`);
console.log(professor);

console.log(`======Step 6: Transverse the array certificate ========`);
for (const element of professor.certificate) {
    console.log(element);
}