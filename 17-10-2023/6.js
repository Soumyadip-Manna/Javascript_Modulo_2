const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  
};

console.log("Below Are the Product Details");
for(let key in productDetails)
{
    console.log(`${key} : ${productDetails[key]}`);
}