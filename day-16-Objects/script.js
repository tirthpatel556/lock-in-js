let user={
    name:"Tirth",
    age:19,
    isStudent:true,
};
console.log(user);
console.log(user.name);
console.log(user["age"]);
user.age=23;
console.log(user["age"]);
user.city="valsad";
delete user.isStudent;
console.log(user);

//task-1

let product={
    name:"hp_victus",
    price:72000,
    inStock:true,
};
console.log(product);
product.price=82000;
product.category="electonics";
console.log(product);

//task-2

let student={
    name:"tirth",
    marks:{
        maths:70,
        science:85,
    }
};
student.marks.maths=75;
console.log(student);
console.log(student.marks.science);

//task-3

let products=[
    { name:"pen", price:10},
    { name:"book", price:100},
    { name:"bag", price:500}
];
products.forEach(product => {
    console.log(product.name);
});

let expensive=products.filter(product => {
    return product.price>50;
});
console.log(expensive);

let Product=products.find(product => {
    return product.name==="book";
});
console.log(Product);

products.forEach(product =>{
    if (product.name==="pen") {
        product.price+=5;
    }
});
console.log(products);