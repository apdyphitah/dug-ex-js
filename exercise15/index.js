const people = [
    { name: "Alice", age: 25, city: "wonderland" },
    { name: "Bob", age: 30, city: "builderland" },
    { name: "Charlie", age: 35, city: "chocolate Factory" }
];

for(let p in people) {
    console.log("property and value of each person:");
    console.log("Name:", people[p].name);
    console.log("Age:", people[p].age);
    console.log("City:", people[p].city);
}