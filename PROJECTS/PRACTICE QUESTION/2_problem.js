const products = [
  { name: "Keyboard", price: 150 },
  { name: "Mouse", price: 50 },
  { name: "Monitor", price: 100 },
  { name: "USB Cable", price: 20 },
  { name: "Laptop", price: 800 }
];

const low = (products) => {
        if (products.price < 100) {
            return true 
        }
        return false
    }
console.log(products.filter(low ))

const discount = products.filter(low)
let d = discount.map((products) => {
let discountprice= products.price - (products.price *0.10);
return products.name , products.price , discountprice
    
})

console.log(d);
