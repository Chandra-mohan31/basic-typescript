class Vehicle{

    // color: string = 'red';
    constructor(public color: string){
        // this.color= color;
    }
    drive(): void{
        console.log('drooo drooo');
        
    }
    horn(): void{
        console.log('peem peem');
        
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.horn();

class Car extends Vehicle {
    constructor(public wheels: number,color: string){
        super(color);


    }
    drive(): void{
        console.log('vroom vroom');
        
    }
}

const car = new Car(21,'orange');

console.log(car.color);
console.log(car.wheels);


// car.drive();
// car.horn();

//public,private and protected attributes;