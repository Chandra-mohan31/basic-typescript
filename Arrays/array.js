var cars = [];
cars.push('hey');
console.log(cars);
var carsMk = [
    ['yeoo'],
    ['broo']
];
var testcar = cars[0];
var mytescar = cars.pop();
cars.map(function (car) {
    return car.toUpperCase();
});
//flexible types
var impDates = [];
impDates.push('2012-23-2');
impDates.push(new Date());
console.log(impDates);
