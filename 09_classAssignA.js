console.log(`=======================Step 1===========================`);
class Vehicle {
   
    constructor (company,model,bikeName,color,average){
        this.company =company
        this.model = model
        this.bikeName = bikeName
        this.color = color
        this.average =average
    }
    details(){
        console.log(`Vehicle Details ==>  Company-${this.company},  Model-${this.model},  Car/Bike Name-${this.bikeName},  Color-${this.color},  Average-${this.average} `);
    }

}
const karizma = new Vehicle("Hero Honda",2011,"Karizma R","Black","45 km/hr");
karizma.details();

const car1 = new Vehicle("Maruti Suzuki",2018,"Swift","White","22 km/hr");
car1.details();

const car2 = new Vehicle("Honda",2014,"Honda City","White","22 km/hr");
car2.details();

const car3 = new Vehicle("Hyundai",2010,"Verna","White","20 km/hr");
car3.details();

const car4 = new Vehicle("Maruti Suzuki",2019,"Ertiga","White","25 km/hr");
car4.details();

console.log(`========Transverse the Array=========`);
const array = [karizma,car1,car2,car3,car4]
for (const element of array) {
    element.details();
}

console.log(`===============Step 2==================`);

class College {
    constructor(name,city,grade,branch){
        this.name = name;
        this.city = city;
        this.grade = grade;
        this.branch = branch
        
    }
    display(){
        console.log(`Collage Details = Name - ${this.name}, City - ${this.city}, Grade-${this.grade}, Branches-${this.branch}`);
    }

}

const collage1 = new College("COEP","Pune","A+",1)
collage1.display()

const collage2 = new College("FIT","Pune","A",5)
collage2.display()

const collage3 = new College("KIT","Kolhapur","A+",4)
collage3.display()

const collage4 = new College("GPK","Kolhapur","A+",10)
collage4.display()