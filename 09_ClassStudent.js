class Student {
    constructor(name, rollNumber, division){
        this.name = name;
        this.rollNumber = rollNumber;
        this.division = division;
    }
    getDetail(){
        console.log(`Student Details => Name: ${this.name}, Roll Number : ${this.rollNumber}, Division: ${this.division}`);
    }
}

const vishal = new Student("Vishal", 25, "A");
vishal.getDetail()
const rohit = new Student("Rohit", 5, "B");
rohit.getDetail()
const avinash = new Student("Avinash",10 , "C");
avinash.getDetail()
console.log(`===== Traversing array object ======`);
const array = [vishal, rohit, avinash];
for (const element of array) {
   element.getDetail(); 
}