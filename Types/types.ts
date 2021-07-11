const nums: number[] = [1,2,3];
console.log(nums);
const obj :{x:number,y:number} = {
    x:1,
    y:1
}
let date = new Date();
console.log(date.getTime());

date.getTime()

console.log(obj);

class Car{

}
let car: Car = new Car();


//function

const logNum: (i: number) => (void)  = (i: number) =>{
    console.log(i);
    
}
logNum(6);

let num = 8;

let numbers = [-10,2,-9];

let numAbvZero: boolean | number= false;

for(let i = 0;i<numbers.length;i++){
    numAbvZero = numbers[i]
}