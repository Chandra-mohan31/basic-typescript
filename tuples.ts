
// tuples and interfaces:


//type alias 
// type pet = 'cat' | 'dog';
// type Drink = [string,boolean,number];

// const pepsi: Drink = ['broen',true,23];
// let pet1: pet = 'cat';
// let pet2: pet = 'dog';

// console.log(pepsi,pet1);


// const carSpecs: [number, number] = [400,3354];
// const carStats = {
//     horsepower: 400,
//     weight: 455
// };
interface Details {
    // color: string;
    // year: Date;
    // sugar: number;
    summary(): string;
}



const drink = {
    color: 'brown',
    year: new Date(),
    sugar: 12,
    summary(): string{
            return `color:${this.color}`
    }
}

const printDrink = (drink:Details): void => {
     
    console.log(`color: ${drink.summary()}`);
    

    

}

printDrink(drink);

