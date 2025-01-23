db = db.getSiblingDB("bidly");

// USUARIOS
db.users.insertMany([
    {
        name: "Alice Johnson",
        email: "≥",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "123 Main St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    },
    {
        name: "Bob Smith",
        email: "bob@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "456 Elm St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png",
    },
    {
        name: "Carol Williams",
        email: "carol@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "789 Pine St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    },
    {
        name: "Dave Brown",
        email: "dave@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "321 Oak St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png",
    },
    {
        name: "Eve Davis",
        email: "eve@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "654 Cedar St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    },
    {
        name: "Frank Moore",
        email: "frank@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "987 Birch St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png",
    },
    {
        name: "Grace Lee",
        email: "grace@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "147 Maple St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    },
    {
        name: "Henry White",
        email: "henry@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "258 Spruce St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png",
    },
    {
        name: "Irene Clark",
        email: "irene@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "369 Redwood St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/mujer-cinco.png",
    },
    {
        name: "Jack Thompson",
        email: "jack@example.com",
        password:
            "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK",
        address: "741 Aspen St",
        avatar: "https://bidly-products.s3.eu-north-1.amazonaws.com/uploads/users/default-avatar/hombre-cinco.png",
    },
]);
