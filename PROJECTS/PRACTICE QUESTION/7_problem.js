const sales = [
  { product: "Laptop", sold: 15 },
  { product: "Phone", sold: 30 },
  { product: "Tablet", sold: 12 },
  { product: "Monitor", sold: 8 }
];

const totalSold = sales.reduce((total, item) => {
  return total + item.sold;
}, 0);

console.log("Total sold =", totalSold); // Output: Total sold = 65
