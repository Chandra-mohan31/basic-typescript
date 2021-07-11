import faker from "faker";

export class Company{
    companyName: string;
    catchPhrase: string;
    location:{
        lat: number,
        lng: number
    }
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.longitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }
    markerContent(): string{
        return `<div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>catch phrase: ${this.catchPhrase}</h3>
            </div>`
    }
}