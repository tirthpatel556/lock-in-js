// product-data

let products=[
    { id:1, name:"Laptop", price:50000, category:"electronics", stock:3},
    { id:2, name:"Phone", price:20000, category:"electronics", stock:0},
    { id:3, name:"Shoes", price:3000, category:"fashion", stock:5},
    { id:4, name:"Watch", price:1500, category:"fashion", stock:10},
];

// functions

function getProductNames(products){
    return products.map(product=>{
        return product.name;
    });
};
let names=getProductNames(products);
console.log(names);

function getAvailableProducts(products){
    return products.filter(product=>{
        return product.stock>0;
    });
};
let inStock=getAvailableProducts(products);
console.log(inStock);

function findProductById(products,id) {
    return products.find(product=>{
        return product.id===id;
    });
};
let findProduct=findProductById(products,3);
console.log(findProduct);

function getInventoryValue(products) {
    return products.reduce((total,product)=>{
        return total+(product.price * product.stock);
    },0);
};
let totalValue=getInventoryValue(products);
console.log(totalValue);

function getExpensiveProducts(products,minPrice) {
    return products.filter(product=>
     product.price>minPrice).map(product=>
         product.name);
};

let expensive=getExpensiveProducts(products,10000);
console.log("expensive products:",expensive);

// async simulation
function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                names:names,
                inStock:inStock,
                totalValue:totalValue,
                findProduct:findProduct,
            });
        }, 2000);
    });
};
async function runStore() {
    try {
        let product=await fetchProducts();
        console.log("product Names:",product.names);
        console.log("Available products:",product.inStock);
        console.log("Found Product:",product.findProduct);
        console.log("Inventory Value:",product.totalValue);
        
    } catch (error) {
        console.log("Something went wrong!",error);
    }
}

// main-program
runStore();