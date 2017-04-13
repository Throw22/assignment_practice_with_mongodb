Insert a product with the following properties

name: "Hammer"
price: 9.99
department: "Hardware"
color: "red"
sales: 80
stock: 50

```
db.products.insert({
  name: "Hammer",
  price: 9.99,
  department: "Hardware",
  color: "red",
  sales: 80,
  stock: 50
});
```


Insert the following products in a single query

var products = [
  {name: "Screwdriver",
  price: 19.99,
  department: "Hardware",
  color: "green",
  sales: 75,
  stock: 50},
  {
    name: "Wrench",
    price: 21.99,
    department: "Hardware",
    color: "orange",
    sales: 70,
    stock: 50
  }
];

db.products.insert(products);

-
name: "Screwdriver"
price: 19.99
department: "Hardware"
color: "green"
sales: 75
stock: 50
-
name: "Wrench"
price: 21.99
department: "Hardware"
color: "orange"
sales: 70
stock: 50


Note for some of these you may have to refer to update operators like $min and $max.
Change the department of all products in the "Hardware" department to "Hardware Tools"
db.products.find({department:'Hardware'});

db.products.updateMany(
  { department: 'Hardware' },
  { $set: {department: 'Hardware Tools'}}
);


Change the price of all products in the "Hardware Tools" department to cost $10 more than their current price

db.products.updateMany(
  { department: 'Hardware Tools'},
  { $inc: {price: 10}}
);

Update the sales of all the products in the "Hardware Tools" department to be at least 50

db.products.updateMany(
  {$and: [{ department: 'Hardware Tools'},{sales: {$lt: 76}}]},
  {$set: {sales: 76}}
);

Change the department of all the products in the "Hardware Tools" department to be "Hardware" again

db.products.updateMany(
  { department: 'Hardware Tools' },
  { $set: {department: 'Hardware'}}
);

Change the price of all the products in the "Hardware" department to be $10 less than their current price

db.products.updateMany(
  { department: 'Hardware'},
  { $inc: {price: -10}}
);

Change the sales of all the products in the "Hardware" department to be at most 10

db.products.updateMany(
  {$and: [{ department: 'Hardware'},{sales: {$gt: 10}}]},
  {$set: {sales: 10}}
);

Update the first product in the "Hardware" department to have one more sale

db.products.updateOne(
  { department: 'Hardware'},
  { $inc: {sales: 1}}
);

Remove the first product in the "Hardware" department

db.products.remove(
  { department: 'Hardware'},
  { justOne: 1}
);

Remove all products in the "Hardware" department

db.products.remove(
  { department: 'Hardware'}
);

Note that you should use projection for these queries to filter the returned fields to only those fields described in each problem.

Find the names of all the products that are out of stock

db.products.find(
  { stock : 0 },
  { _id: 0, name: 1 }
);

Find the stock count of all the products with a price below $100


Find the name, color and department of all the products with a price between $100 and $1000
Find the names of all the red products
Find only the IDs of all the red and blue products
Find the names of all the products that are not red or blue
Find the names of all the products that are not in the Sports or Games departments
Find the name and price of all the products with names that begin with the letter F and end with the letter S and ignore case
Using $where, find all the product names that begin with T
Using $where, find all the product names that begin with capital F or end with lowercase S
Using $where, find all the product names that begin with capital T and have a price less than $100
Using $where, find all the product names and prices of products that either start with A and have a price of at least $100 or start with B and have a price of at most $100
