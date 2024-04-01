

const fruit_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"]

console.log(`========First and Last elements========`);
console.log(fruit_seasonal[0]);
console.log(fruit_seasonal.length-1);
console.log(fruit_seasonal[4]);

console.log(`=======Add element===========`);

fruit_seasonal.unshift("Papaya")
console.log(fruit_seasonal);
;

console.log(`=======Remove elements==========`);
const deleteValue = fruit_seasonal.splice(4,1);
console.log(deleteValue);
console.log(fruit_seasonal);

console.log(`========Add Elements=============`)
var addValue = fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);
const AddEle = fruit_seasonal.splice(4,0,"Dragon Fruit")
console.log(fruit_seasonal);

console.log(`==========Replace========`);
fruit_seasonal[2]= "Kiwi"
console.log(fruit_seasonal);

console.log(`=======slice========`);
const sliceEle = fruit_seasonal.slice(1,4)
console.log(sliceEle);

console.log(`========Last 3 elements========`);
const lastThreeElements = fruit_seasonal.slice(fruit_seasonal.length-3);
console.log(lastThreeElements);