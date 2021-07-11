const cars: string[] = [];

cars.push('hey')
console.log(cars);

const carsMk = [
    ['yeoo'],
    ['broo']
]

const testcar = cars[0];
const mytescar = cars.pop();

cars.map((car: string): string=>{
    return car.toUpperCase();
})

//flexible types
const impDates: (Date | string)[] = [];

impDates.push('2012-23-2');
impDates.push(new Date())

console.log(impDates);
