db = db.getSiblingDB("bidly");

// CATEGORIAS
db.categories.insertMany([
    { name: "Electronics" },
    { name: "Furniture" }, 
    { name: "Art" }, 
    { name: "Books" }, 
    { name: "Antiquities" },
    { name: "Jewelry" }, 
    { name: "Clothing" }, 
    { name: "Toys" }, 
    { name: "Music" }, 
    { name: "Movies" }, 
    { name: "Games" }, 
]);