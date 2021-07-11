import axios from "axios";
const url = "https://mern-ecommerce-application.herokuapp.com/api/products";


// interface Data {
//     _id: string;
//     stock: number
// }

// interface Todo{
//     id: Number,
//     name: String,
//     value: String
// }

axios.get(url).then(response=>{
    // const data = response.data as Data;
    // const todos = response.data as Todo;
    console.log(response.data);
    const products = response.data;
    products.map((product)=>{
        return(
            console.log(product._id,product.stock)
           
            
            
        )
    })
    
})

const add = (a: number,b: number): number => {
    return a+b;
    
}
console.log(add(1,2));

