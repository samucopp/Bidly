db = db.getSiblingDB("bidly");

// Usuarios
db.users.insertMany([
    { name: "Alice Johnson", email: "alice@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "123 Main St", avatar: "/avatars/mujer-cinco.png" },
    { name: "Bob Smith", email: "bob@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "456 Elm St", avatar: "/avatars/hombre-cinco.png" },
    { name: "Carol Williams", email: "carol@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "789 Pine St", avatar: "/avatars/mujer-cinco.png" },
    { name: "Dave Brown", email: "dave@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "321 Oak St", avatar: "/avatars/hombre-cinco.png" },
    { name: "Eve Davis", email: "eve@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "654 Cedar St", avatar: "/avatars/mujer-cinco.png" },
    { name: "Frank Moore", email: "frank@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "987 Birch St", avatar: "/avatars/hombre-cinco.png" },
    { name: "Grace Lee", email: "grace@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "147 Maple St", avatar: "/avatars/mujer-cinco.png" },
    { name: "Henry White", email: "henry@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "258 Spruce St", avatar: "/avatars/hombre-cinco.png" },
    { name: "Irene Clark", email: "irene@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "369 Redwood St", avatar: "/avatars/mujer-cinco.png" },
    { name: "Jack Thompson", email: "jack@example.com", password: "$2a$10$rjRkcfzvQRUL9L2j5BHyeupfjuprWHwtI4rO5oDHrkw2qensLGUFK", address: "741 Aspen St", avatar: "/avatars/hombre-cinco.png" }
]);

// Categorías
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

// SUBASTAS CATEGORIA "ELECTRONICS"
db.auctions.insertMany([
    {
        title: "Apple iPhone 14",
        description: "Latest model of the Apple iPhone with 128GB storage.",
        images: ["iphone14.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple iPhone 14 Max",
        description: "Latest model of the Apple iPhone with 128GB storage.",
        images: ["iphone14Max.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1000,
        minIncrement: 50,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Samsung Galaxy S23",
        description: "High-performance smartphone with 256GB storage.",
        images: ["galaxy_s23.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Sony WH-1000XM5",
        description: "Premium noise-canceling wireless headphones with up to 30 hours of battery life.",
        images: ["sony_headphones.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Dell XPS 13",
        description: "Ultra-slim laptop with Intel i7 processor.",
        images: ["dell_xps13.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple Watch Series 8",
        description: "Smartwatch with advanced health tracking features.",
        images: ["apple_watch.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "PlayStation 5 Console",
        description: "Next-generation gaming console with 4K support and ultra-fast SSD.",
        images: ["ps5.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Nintendo Switch OLED Model",
        description: "New version of Nintendo’s hybrid console with a 7-inch OLED display.",
        images: ["switch_oled.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 350,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Lenovo ThinkPad X1 Carbon",
        description: "Ultra-light business laptop with a 14-inch display and powerful Intel processor.",
        images: ["lenovo_thinkpad_x1_carbon.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "irene@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Logitech MX Master 3",
        description: "Advanced wireless mouse with ultrafast scrolling, ergonomic design, and customizable buttons.",
        images: ["logitech_mx_master_3.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 100,
        sellerId: db.users.findOne({ email: "irene@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "WD My Passport 2TB External SSD",
        description: "Portable high-speed external solid state drive with durable design and password protection.",
        images: ["wd_my_passport_2tb_ssd.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "irene@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Philips Hue Starter Kit",
        description: "Smart lighting system including bulbs and a Hue Bridge for voice and remote control.",
        images: ["philips_hue_starter_kit.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "jack@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple TV 4K (3rd Generation)",
        description: "Streaming device that delivers 4K HDR content with Dolby Vision, Siri Remote, and Apple Arcade support.",
        images: ["apple_tv_4k_3rd_gen.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 170,
        sellerId: db.users.findOne({ email: "jack@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Amazon Echo Show 10",
        description: "Smart display with a rotating screen, Alexa voice assistant, and built-in camera for video calls.",
        images: ["amazon_echo_show_10.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "jack@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Xiaomi 12 Pro",
        description: "Flagship smartphone with a powerful processor, triple camera setup, and fast charging technology.",
        images: ["xiaomi_12_pro.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple iPad Air (5th Generation, M1)",
        description: "Lightweight tablet featuring the Apple M1 chip, a 10.9-inch Liquid Retina display, and Touch ID.",
        images: ["ipad_air_5th_gen.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "LG C2 65-inch OLED TV",
        description: "4K OLED TV offering deep blacks and vibrant colors with AI-powered picture processing.",
        images: ["lg_c2_65_oled_tv.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1800,
        sellerId: db.users.findOne({ email: "grace@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Garmin Fenix 7",
        description: "Premium multisport GPS smartwatch with advanced health and fitness features.",
        images: ["garmin_fenix_7.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "grace@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Fitbit Charge 5",
        description: "Advanced fitness tracker with built-in GPS, ECG app, and stress management tools.",
        images: ["fitbit_charge_5.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 150,
        sellerId: db.users.findOne({ email: "grace@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Xbox Series X",
        description: "The most powerful Xbox gaming console.",
        images: ["xbox_series_x.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple MacBook Pro (M1)",
        description: "High-performance laptop featuring Apple’s M1 chip and 8GB of RAM.",
        images: ["macbook_pro_m1.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Samsung 55-inch 4K Smart TV",
        description: "55-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
        images: ["samsung_55_4k_tv.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Bose QuietComfort 35 II",
        description: "Wireless headphones with noise cancellation and up to 20 hours of battery life.",
        images: ["bose_qc35_ii.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "henry@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Canon EOS R5",
        description: "High-end mirrorless camera with a 45MP full-frame sensor and 8K video recording.",
        images: ["canon_eos_r5.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 3000,
        sellerId: db.users.findOne({ email: "henry@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Apple AirPods Pro (2nd Generation)",
        description: "Wireless earbuds with active noise cancellation and improved battery life.",
        images: ["apple_airpods_pro_2.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "henry@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Microsoft Surface Pro 9",
        description: "Versatile 2-in-1 laptop with a 13-inch touchscreen and optional keyboard attachment.",
        images: ["microsoft_surface_pro_9.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "henry@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "GoPro Hero 11 Black",
        description: "Action camera with 5.3K video recording, improved stabilization, and waterproof design.",
        images: ["gopro_hero_11_black.jpg"],
        category: db.categories.findOne({ name: "Electronics" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
]);

//SUBASTAS CATEGORIA "BOOKS"
db.auction.insertMany([
    {
        title: "To Kill a Mockingbird",
        description: "Harper Lee's Pulitzer Prize-winning novel set in the 1930s Deep South, addressing racial injustice and moral growth.",
        images: ["to_kill_a_mockingbird.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 20,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "1984",
        description: "George Orwell's dystopian novel depicting a totalitarian regime and the perils of government overreach.",
        images: ["1984.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 15,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pride and Prejudice",
        description: "Jane Austen's classic novel exploring themes of love, social standing, and personal growth in early 19th-century England.",
        images: ["pride_and_prejudice.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 15,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "The Great Gatsby",
        description: "F. Scott Fitzgerald's novel about the enigmatic Jay Gatsby and the American Dream in the Roaring Twenties.",
        images: ["great_gatsby.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 25,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Moby-Dick",
        description: "Herman Melville's epic tale of Captain Ahab's obsessive quest to hunt down the white whale, Moby Dick.",
        images: ["moby_dick.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 18,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Brave New World",
        description: "Aldous Huxley's futuristic novel exploring a technologically advanced society's dangers of conformity and state control.",
        images: ["brave_new_world.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 11,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Jane Eyre",
        description: "Charlotte Brontë's pioneering novel in first-person, charting the life and struggles of the independent-minded Jane Eyre.",
        images: ["jane_eyre.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 13,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Crime and Punishment",
        description: "Fyodor Dostoevsky's psychological masterpiece examining guilt, morality, and redemption in 19th-century Russia.",
        images: ["crime_and_punishment.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 20,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Little Women",
        description: "Louisa May Alcott's classic following the lives of the March sisters as they navigate love, family, and growing up.",
        images: ["little_women.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 12,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "The Catcher in the Rye",
        description: "J.D. Salinger's classic novel.",
        images: ["catcher_rye.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 18,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        description: "The first book in the Harry Potter series by J.K. Rowling, introducing Harry's life at Hogwarts and the wizarding world.",
        images: ["harry_potter_1.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 10,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        description: "The second installment of the series, where Harry returns to Hogwarts and encounters the mysteries of the Chamber of Secrets.",
        images: ["harry_potter_2.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 11,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        description: "Harry’s third year at Hogwarts brings the threat of escaped prisoner Sirius Black—and reveals more about Harry’s past.",
        images: ["harry_potter_3.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 12,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        description: "Harry's fourth year features the Triwizard Tournament, new challenges, and the alarming return of dark forces.",
        images: ["harry_potter_4.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 13,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        description: "In his fifth year, Harry battles skepticism about Lord Voldemort’s return and faces O.W.L. exams amid a growing rebellion.",
        images: ["harry_potter_5.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 14,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        description: "Harry delves into Voldemort's dark past with Dumbledore, while secrets from an old potions book spark new suspicions.",
        images: ["harry_potter_6.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 15,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        description: "The final book in the series follows Harry, Ron, and Hermione on a perilous quest to defeat Voldemort once and for all.",
        images: ["harry_potter_7.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 16,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    }
]);

// Subastas
db.auctions.insertMany([
    // Furniture
    {
        title: "IKEA EKTORP Sofa",
        description: "Comfortable and durable sofa from IKEA.",
        images: ["ektorp_sofa.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date(),
    },
    {
        title: "West Elm Mid-Century Dining Table",
        description: "Stylish dining table with a mid-century modern design.",
        images: ["west_elm_table.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Herman Miller Aeron Chair",
        description: "Ergonomic office chair for ultimate comfort.",
        images: ["aeron_chair.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pottery Barn Coffee Table",
        description: "Rustic coffee table with ample storage space.",
        images: ["coffee_table.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Ashley Furniture Recliner",
        description: "Recliner chair with plush cushioning.",
        images: ["recliner.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Art
    {
        title: "Picasso Print: The Weeping Woman",
        description: "High-quality print of Picasso's famous work.",
        images: ["picasso_print.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Van Gogh Starry Night Poster",
        description: "Poster of Van Gogh's iconic painting.",
        images: ["starry_night.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Modern Abstract Painting",
        description: "Large abstract painting for contemporary spaces.",
        images: ["abstract_painting.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Handmade Ceramic Sculpture",
        description: "Unique handmade sculpture from a local artist.",
        images: ["ceramic_sculpture.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Banksy Inspired Canvas",
        description: "Canvas art inspired by Banksy's graffiti style.",
        images: ["banksy_canvas.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Antiquities
    {
        title: "Roman Coin",
        description: "Ancient Roman coin in excellent condition.",
        images: ["roman_coin.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Egyptian Amulet",
        description: "Rare amulet from ancient Egypt.",
        images: ["egyptian_amulet.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Greek Vase",
        description: "Ancient Greek vase with intricate design.",
        images: ["greek_vase.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Medieval Sword",
        description: "Rare sword from the medieval era.",
        images: ["medieval_sword.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Chinese Terracotta Statue",
        description: "Ancient statue from the Han dynasty.",
        images: ["terracotta_statue.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Jewelry
    {
        title: "Cartier Love Bracelet",
        description: "Iconic bracelet from Cartier's Love collection.",
        images: ["cartier_love.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 5000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Tiffany & Co. Diamond Ring",
        description: "Elegant diamond ring from Tiffany & Co.",
        images: ["tiffany_ring.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 8000,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Chopard Pendant Necklace",
        description: "Beautiful pendant necklace by Chopard.",
        images: ["chopard_necklace.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 7000,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Van Cleef & Arpels Alhambra Bracelet",
        description: "Signature bracelet from Van Cleef & Arpels.",
        images: ["van_cleef_bracelet.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 6000,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Rolex Pearlmaster Watch",
        description: "Luxurious Pearlmaster watch by Rolex.",
        images: ["rolex_pearlmaster.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 15000,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Clothing
    {
        title: "Nike Air Max 90",
        description: "Classic Nike sneakers in a variety of colors.",
        images: ["nike_air_max.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Levi's 501 Jeans",
        description: "Iconic denim jeans with a timeless fit.",
        images: ["levis_501.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 80,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Gucci GG Marmont Belt",
        description: "Luxury belt with signature GG logo.",
        images: ["gucci_belt.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "The North Face Puffer Jacket",
        description: "Warm and stylish puffer jacket for winter.",
        images: ["north_face_jacket.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Adidas Originals Hoodie",
        description: "Comfortable hoodie with the Adidas Originals logo.",
        images: ["adidas_hoodie.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 90,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Toys
    {
        title: "LEGO Star Wars Millennium Falcon",
        description: "Detailed LEGO set of the iconic Millennium Falcon.",
        images: ["lego_falcon.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 150,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Barbie Dreamhouse",
        description: "Luxury dollhouse with multiple rooms and accessories.",
        images: ["barbie_dreamhouse.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Hot Wheels Ultimate Garage",
        description: "Large Hot Wheels garage playset with multiple levels.",
        images: ["hot_wheels_garage.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "NERF Elite 2.0 Blaster",
        description: "High-performance NERF blaster with extra darts.",
        images: ["nerf_blaster.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 70,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Fisher-Price Laugh & Learn Smart Stages Chair",
        description: "Interactive learning chair for toddlers.",
        images: ["fisher_price_chair.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Music
    {
        title: "Fender Stratocaster Guitar",
        description: "Iconic electric guitar for all music styles.",
        images: ["fender_stratocaster.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Yamaha Digital Piano",
        description: "High-quality digital piano with weighted keys.",
        images: ["yamaha_piano.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Shure SM7B Microphone",
        description: "Professional-grade microphone for studio recording.",
        images: ["shure_sm7b.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Marshall Bluetooth Speaker",
        description: "Portable speaker with a retro design.",
        images: ["marshall_speaker.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Roland Electronic Drum Set",
        description: "Compact and versatile electronic drum kit.",
        images: ["roland_drum_set.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Movies
    {
        title: "Star Wars: The Original Trilogy Blu-ray",
        description: "Box set of the original Star Wars trilogy.",
        images: ["star_wars_trilogy.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "The Godfather Collection DVD",
        description: "Complete collection of The Godfather films.",
        images: ["godfather_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Marvel Cinematic Universe Phase 1 Blu-ray",
        description: "Box set of the first phase of the MCU.",
        images: ["mcu_phase1.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 80,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Potter Complete Series DVD",
        description: "All eight Harry Potter movies in one collection.",
        images: ["harry_potter_movies.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 70,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Criterion Collection: Parasite",
        description: "Special edition of the Academy Award-winning film.",
        images: ["parasite_criterion.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 40,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

    // Games
    {
        title: "The Legend of Zelda: Tears of the Kingdom",
        description: "Highly anticipated sequel in the Zelda series.",
        images: ["zelda_totk.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 70,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Elden Ring",
        description: "Acclaimed action RPG by FromSoftware.",
        images: ["elden_ring.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },

]);

// Pujas
db.bids.insertMany([
    // Pujas para Apple iPhone 14
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1050 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1150 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1250 },

    // Pujas para Samsung Galaxy S23
    { auctionId: db.auctions.findOne({ title: "Samsung Galaxy S23" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 940 },
    { auctionId: db.auctions.findOne({ title: "Samsung Galaxy S23" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 980 },
    { auctionId: db.auctions.findOne({ title: "Samsung Galaxy S23" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1020 },
    { auctionId: db.auctions.findOne({ title: "Samsung Galaxy S23" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1060 },
    { auctionId: db.auctions.findOne({ title: "Samsung Galaxy S23" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1100 },

    // Pujas para Sony WH-1000XM5
    { auctionId: db.auctions.findOne({ title: "Sony WH-1000XM5" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 420 },
    { auctionId: db.auctions.findOne({ title: "Sony WH-1000XM5" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 440 },
    { auctionId: db.auctions.findOne({ title: "Sony WH-1000XM5" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 460 },
    { auctionId: db.auctions.findOne({ title: "Sony WH-1000XM5" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 480 },
    { auctionId: db.auctions.findOne({ title: "Sony WH-1000XM5" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 500 },

    // Pujas para Dell XPS 13
    { auctionId: db.auctions.findOne({ title: "Dell XPS 13" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 1250 },
    { auctionId: db.auctions.findOne({ title: "Dell XPS 13" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 1300 },
    { auctionId: db.auctions.findOne({ title: "Dell XPS 13" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1350 },
    { auctionId: db.auctions.findOne({ title: "Dell XPS 13" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1400 },
    { auctionId: db.auctions.findOne({ title: "Dell XPS 13" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1450 },

    // Pujas para Apple Watch Series 8
    { auctionId: db.auctions.findOne({ title: "Apple Watch Series 8" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 520 },
    { auctionId: db.auctions.findOne({ title: "Apple Watch Series 8" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 545 },
    { auctionId: db.auctions.findOne({ title: "Apple Watch Series 8" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 570 },
    { auctionId: db.auctions.findOne({ title: "Apple Watch Series 8" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 595 },
    { auctionId: db.auctions.findOne({ title: "Apple Watch Series 8" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 620 },

    // Pujas para IKEA EKTORP Sofa
    { auctionId: db.auctions.findOne({ title: "IKEA EKTORP Sofa" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 320 },
    { auctionId: db.auctions.findOne({ title: "IKEA EKTORP Sofa" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 340 },
    { auctionId: db.auctions.findOne({ title: "IKEA EKTORP Sofa" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 360 },
    { auctionId: db.auctions.findOne({ title: "IKEA EKTORP Sofa" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 380 },
    { auctionId: db.auctions.findOne({ title: "IKEA EKTORP Sofa" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 400 },

    // Pujas para West Elm Mid-Century Dining Table
    { auctionId: db.auctions.findOne({ title: "West Elm Mid-Century Dining Table" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 840 },
    { auctionId: db.auctions.findOne({ title: "West Elm Mid-Century Dining Table" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 880 },
    { auctionId: db.auctions.findOne({ title: "West Elm Mid-Century Dining Table" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 920 },
    { auctionId: db.auctions.findOne({ title: "West Elm Mid-Century Dining Table" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 960 },
    { auctionId: db.auctions.findOne({ title: "West Elm Mid-Century Dining Table" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1000 },

    // Pujas para Herman Miller Aeron Chair
    { auctionId: db.auctions.findOne({ title: "Herman Miller Aeron Chair" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 1050 },
    { auctionId: db.auctions.findOne({ title: "Herman Miller Aeron Chair" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Herman Miller Aeron Chair" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1150 },
    { auctionId: db.auctions.findOne({ title: "Herman Miller Aeron Chair" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Herman Miller Aeron Chair" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1250 },

    // Pujas para Pottery Barn Coffee Table
    { auctionId: db.auctions.findOne({ title: "Pottery Barn Coffee Table" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 520 },
    { auctionId: db.auctions.findOne({ title: "Pottery Barn Coffee Table" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 545 },
    { auctionId: db.auctions.findOne({ title: "Pottery Barn Coffee Table" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 570 },
    { auctionId: db.auctions.findOne({ title: "Pottery Barn Coffee Table" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 595 },
    { auctionId: db.auctions.findOne({ title: "Pottery Barn Coffee Table" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 620 },

    // Pujas para Ashley Furniture Recliner
    { auctionId: db.auctions.findOne({ title: "Ashley Furniture Recliner" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 630 },
    { auctionId: db.auctions.findOne({ title: "Ashley Furniture Recliner" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 660 },
    { auctionId: db.auctions.findOne({ title: "Ashley Furniture Recliner" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 690 },
    { auctionId: db.auctions.findOne({ title: "Ashley Furniture Recliner" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 720 },
    { auctionId: db.auctions.findOne({ title: "Ashley Furniture Recliner" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 750 },

    // Pujas para Picasso Print: The Weeping Woman
    { auctionId: db.auctions.findOne({ title: "Picasso Print: The Weeping Woman" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 220 },
    { auctionId: db.auctions.findOne({ title: "Picasso Print: The Weeping Woman" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 230 },
    { auctionId: db.auctions.findOne({ title: "Picasso Print: The Weeping Woman" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 240 },
    { auctionId: db.auctions.findOne({ title: "Picasso Print: The Weeping Woman" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 250 },
    { auctionId: db.auctions.findOne({ title: "Picasso Print: The Weeping Woman" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 260 },

    // Pujas para Van Gogh Starry Night Poster
    { auctionId: db.auctions.findOne({ title: "Van Gogh Starry Night Poster" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 55 },
    { auctionId: db.auctions.findOne({ title: "Van Gogh Starry Night Poster" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 60 },
    { auctionId: db.auctions.findOne({ title: "Van Gogh Starry Night Poster" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 65 },
    { auctionId: db.auctions.findOne({ title: "Van Gogh Starry Night Poster" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 70 },
    { auctionId: db.auctions.findOne({ title: "Van Gogh Starry Night Poster" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 75 },

    // Pujas para Modern Abstract Painting
    { auctionId: db.auctions.findOne({ title: "Modern Abstract Painting" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 420 },
    { auctionId: db.auctions.findOne({ title: "Modern Abstract Painting" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 440 },
    { auctionId: db.auctions.findOne({ title: "Modern Abstract Painting" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 460 },
    { auctionId: db.auctions.findOne({ title: "Modern Abstract Painting" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 480 },
    { auctionId: db.auctions.findOne({ title: "Modern Abstract Painting" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 500 },

    // Pujas para Handmade Ceramic Sculpture
    { auctionId: db.auctions.findOne({ title: "Handmade Ceramic Sculpture" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 320 },
    { auctionId: db.auctions.findOne({ title: "Handmade Ceramic Sculpture" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 340 },
    { auctionId: db.auctions.findOne({ title: "Handmade Ceramic Sculpture" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 360 },
    { auctionId: db.auctions.findOne({ title: "Handmade Ceramic Sculpture" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 380 },
    { auctionId: db.auctions.findOne({ title: "Handmade Ceramic Sculpture" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 400 },

    // Pujas para Banksy Inspired Canvas
    { auctionId: db.auctions.findOne({ title: "Banksy Inspired Canvas" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 620 },
    { auctionId: db.auctions.findOne({ title: "Banksy Inspired Canvas" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 645 },
    { auctionId: db.auctions.findOne({ title: "Banksy Inspired Canvas" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 670 },
    { auctionId: db.auctions.findOne({ title: "Banksy Inspired Canvas" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 695 },
    { auctionId: db.auctions.findOne({ title: "Banksy Inspired Canvas" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 720 },

    // Pujas para To Kill a Mockingbird
    { auctionId: db.auctions.findOne({ title: "To Kill a Mockingbird" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 22 },
    { auctionId: db.auctions.findOne({ title: "To Kill a Mockingbird" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 24 },
    { auctionId: db.auctions.findOne({ title: "To Kill a Mockingbird" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 26 },
    { auctionId: db.auctions.findOne({ title: "To Kill a Mockingbird" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 28 },
    { auctionId: db.auctions.findOne({ title: "To Kill a Mockingbird" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 30 },

    // Pujas para 1984 by George Orwell
    { auctionId: db.auctions.findOne({ title: "1984 by George Orwell" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 16 },
    { auctionId: db.auctions.findOne({ title: "1984 by George Orwell" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 17 },
    { auctionId: db.auctions.findOne({ title: "1984 by George Orwell" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 18 },
    { auctionId: db.auctions.findOne({ title: "1984 by George Orwell" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 19 },
    { auctionId: db.auctions.findOne({ title: "1984 by George Orwell" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 20 },

    // Pujas para The Great Gatsby
    { auctionId: db.auctions.findOne({ title: "The Great Gatsby" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 27 },
    { auctionId: db.auctions.findOne({ title: "The Great Gatsby" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 29 },
    { auctionId: db.auctions.findOne({ title: "The Great Gatsby" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 31 },
    { auctionId: db.auctions.findOne({ title: "The Great Gatsby" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 33 },
    { auctionId: db.auctions.findOne({ title: "The Great Gatsby" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 35 },

    // Pujas para Harry Potter and the Sorcerer's Stone
    { auctionId: db.auctions.findOne({ title: "Harry Potter and the Sorcerer's Stone" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 33 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter and the Sorcerer's Stone" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 36 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter and the Sorcerer's Stone" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 39 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter and the Sorcerer's Stone" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 42 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter and the Sorcerer's Stone" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 45 },

    // Pujas para The Catcher in the Rye
    { auctionId: db.auctions.findOne({ title: "The Catcher in the Rye" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 20 },
    { auctionId: db.auctions.findOne({ title: "The Catcher in the Rye" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 22 },
    { auctionId: db.auctions.findOne({ title: "The Catcher in the Rye" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 24 },
    { auctionId: db.auctions.findOne({ title: "The Catcher in the Rye" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 26 },
    { auctionId: db.auctions.findOne({ title: "The Catcher in the Rye" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 28 },

    // Pujas para Roman Coin
    { auctionId: db.auctions.findOne({ title: "Roman Coin" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 210 },
    { auctionId: db.auctions.findOne({ title: "Roman Coin" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 220 },
    { auctionId: db.auctions.findOne({ title: "Roman Coin" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 230 },
    { auctionId: db.auctions.findOne({ title: "Roman Coin" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 240 },
    { auctionId: db.auctions.findOne({ title: "Roman Coin" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 250 },

    // Pujas para Egyptian Amulet
    { auctionId: db.auctions.findOne({ title: "Egyptian Amulet" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 315 },
    { auctionId: db.auctions.findOne({ title: "Egyptian Amulet" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 330 },
    { auctionId: db.auctions.findOne({ title: "Egyptian Amulet" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 345 },
    { auctionId: db.auctions.findOne({ title: "Egyptian Amulet" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 360 },
    { auctionId: db.auctions.findOne({ title: "Egyptian Amulet" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 375 },

    // Pujas para Greek Vase
    { auctionId: db.auctions.findOne({ title: "Greek Vase" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 520 },
    { auctionId: db.auctions.findOne({ title: "Greek Vase" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 545 },
    { auctionId: db.auctions.findOne({ title: "Greek Vase" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 570 },
    { auctionId: db.auctions.findOne({ title: "Greek Vase" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 595 },
    { auctionId: db.auctions.findOne({ title: "Greek Vase" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 620 },

    // Pujas para Medieval Sword
    { auctionId: db.auctions.findOne({ title: "Medieval Sword" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 730 },
    { auctionId: db.auctions.findOne({ title: "Medieval Sword" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 765 },
    { auctionId: db.auctions.findOne({ title: "Medieval Sword" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 800 },
    { auctionId: db.auctions.findOne({ title: "Medieval Sword" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 835 },
    { auctionId: db.auctions.findOne({ title: "Medieval Sword" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 870 },

    // Pujas para Chinese Terracotta Statue
    { auctionId: db.auctions.findOne({ title: "Chinese Terracotta Statue" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1050 },
    { auctionId: db.auctions.findOne({ title: "Chinese Terracotta Statue" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Chinese Terracotta Statue" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1150 },
    { auctionId: db.auctions.findOne({ title: "Chinese Terracotta Statue" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Chinese Terracotta Statue" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1250 },

    // Pujas para Cartier Love Bracelet
    { auctionId: db.auctions.findOne({ title: "Cartier Love Bracelet" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 5250 },
    { auctionId: db.auctions.findOne({ title: "Cartier Love Bracelet" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 5500 },
    { auctionId: db.auctions.findOne({ title: "Cartier Love Bracelet" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 5750 },
    { auctionId: db.auctions.findOne({ title: "Cartier Love Bracelet" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 6000 },
    { auctionId: db.auctions.findOne({ title: "Cartier Love Bracelet" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 6250 },

    // Pujas para Tiffany & Co. Diamond Ring
    { auctionId: db.auctions.findOne({ title: "Tiffany & Co. Diamond Ring" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 8400 },
    { auctionId: db.auctions.findOne({ title: "Tiffany & Co. Diamond Ring" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 8800 },
    { auctionId: db.auctions.findOne({ title: "Tiffany & Co. Diamond Ring" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 9200 },
    { auctionId: db.auctions.findOne({ title: "Tiffany & Co. Diamond Ring" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 9600 },
    { auctionId: db.auctions.findOne({ title: "Tiffany & Co. Diamond Ring" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 10000 },

    // Pujas para Chopard Pendant Necklace
    { auctionId: db.auctions.findOne({ title: "Chopard Pendant Necklace" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 7250 },
    { auctionId: db.auctions.findOne({ title: "Chopard Pendant Necklace" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 7600 },
    { auctionId: db.auctions.findOne({ title: "Chopard Pendant Necklace" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 7950 },
    { auctionId: db.auctions.findOne({ title: "Chopard Pendant Necklace" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 8300 },
    { auctionId: db.auctions.findOne({ title: "Chopard Pendant Necklace" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 8650 },

    // Pujas para Van Cleef & Arpels Alhambra Bracelet
    { auctionId: db.auctions.findOne({ title: "Van Cleef & Arpels Alhambra Bracelet" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 6300 },
    { auctionId: db.auctions.findOne({ title: "Van Cleef & Arpels Alhambra Bracelet" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 6600 },
    { auctionId: db.auctions.findOne({ title: "Van Cleef & Arpels Alhambra Bracelet" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 6900 },
    { auctionId: db.auctions.findOne({ title: "Van Cleef & Arpels Alhambra Bracelet" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 7200 },
    { auctionId: db.auctions.findOne({ title: "Van Cleef & Arpels Alhambra Bracelet" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 7500 },

    // Pujas para Rolex Pearlmaster Watch
    { auctionId: db.auctions.findOne({ title: "Rolex Pearlmaster Watch" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 15750 },
    { auctionId: db.auctions.findOne({ title: "Rolex Pearlmaster Watch" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 16500 },
    { auctionId: db.auctions.findOne({ title: "Rolex Pearlmaster Watch" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 17250 },
    { auctionId: db.auctions.findOne({ title: "Rolex Pearlmaster Watch" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 18000 },
    { auctionId: db.auctions.findOne({ title: "Rolex Pearlmaster Watch" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 18750 },

    // Pujas para Nike Air Max 90
    { auctionId: db.auctions.findOne({ title: "Nike Air Max 90" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 130 },
    { auctionId: db.auctions.findOne({ title: "Nike Air Max 90" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 140 },
    { auctionId: db.auctions.findOne({ title: "Nike Air Max 90" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 150 },
    { auctionId: db.auctions.findOne({ title: "Nike Air Max 90" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 160 },
    { auctionId: db.auctions.findOne({ title: "Nike Air Max 90" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 170 },

    // Pujas para Levi's 501 Jeans
    { auctionId: db.auctions.findOne({ title: "Levi's 501 Jeans" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 85 },
    { auctionId: db.auctions.findOne({ title: "Levi's 501 Jeans" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 90 },
    { auctionId: db.auctions.findOne({ title: "Levi's 501 Jeans" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 95 },
    { auctionId: db.auctions.findOne({ title: "Levi's 501 Jeans" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 100 },
    { auctionId: db.auctions.findOne({ title: "Levi's 501 Jeans" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 105 },

    // Pujas para Gucci GG Marmont Belt
    { auctionId: db.auctions.findOne({ title: "Gucci GG Marmont Belt" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 420 },
    { auctionId: db.auctions.findOne({ title: "Gucci GG Marmont Belt" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 440 },
    { auctionId: db.auctions.findOne({ title: "Gucci GG Marmont Belt" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 460 },
    { auctionId: db.auctions.findOne({ title: "Gucci GG Marmont Belt" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 480 },
    { auctionId: db.auctions.findOne({ title: "Gucci GG Marmont Belt" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 500 },

    // Pujas para The North Face Puffer Jacket
    { auctionId: db.auctions.findOne({ title: "The North Face Puffer Jacket" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 270 },
    { auctionId: db.auctions.findOne({ title: "The North Face Puffer Jacket" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 285 },
    { auctionId: db.auctions.findOne({ title: "The North Face Puffer Jacket" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 300 },
    { auctionId: db.auctions.findOne({ title: "The North Face Puffer Jacket" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 315 },
    { auctionId: db.auctions.findOne({ title: "The North Face Puffer Jacket" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 330 },

    // Pujas para Adidas Originals Hoodie
    { auctionId: db.auctions.findOne({ title: "Adidas Originals Hoodie" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 95 },
    { auctionId: db.auctions.findOne({ title: "Adidas Originals Hoodie" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 102 },
    { auctionId: db.auctions.findOne({ title: "Adidas Originals Hoodie" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 109 },
    { auctionId: db.auctions.findOne({ title: "Adidas Originals Hoodie" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 116 },
    { auctionId: db.auctions.findOne({ title: "Adidas Originals Hoodie" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 123 },

    // Pujas para LEGO Star Wars Millennium Falcon
    { auctionId: db.auctions.findOne({ title: "LEGO Star Wars Millennium Falcon" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 160 },
    { auctionId: db.auctions.findOne({ title: "LEGO Star Wars Millennium Falcon" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 170 },
    { auctionId: db.auctions.findOne({ title: "LEGO Star Wars Millennium Falcon" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 180 },
    { auctionId: db.auctions.findOne({ title: "LEGO Star Wars Millennium Falcon" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 190 },
    { auctionId: db.auctions.findOne({ title: "LEGO Star Wars Millennium Falcon" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 200 },

    // Pujas para Barbie Dreamhouse
    { auctionId: db.auctions.findOne({ title: "Barbie Dreamhouse" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 210 },
    { auctionId: db.auctions.findOne({ title: "Barbie Dreamhouse" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 225 },
    { auctionId: db.auctions.findOne({ title: "Barbie Dreamhouse" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 240 },
    { auctionId: db.auctions.findOne({ title: "Barbie Dreamhouse" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 255 },
    { auctionId: db.auctions.findOne({ title: "Barbie Dreamhouse" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 270 },

    // Pujas para Hot Wheels Ultimate Garage
    { auctionId: db.auctions.findOne({ title: "Hot Wheels Ultimate Garage" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 130 },
    { auctionId: db.auctions.findOne({ title: "Hot Wheels Ultimate Garage" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 140 },
    { auctionId: db.auctions.findOne({ title: "Hot Wheels Ultimate Garage" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 150 },
    { auctionId: db.auctions.findOne({ title: "Hot Wheels Ultimate Garage" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 160 },
    { auctionId: db.auctions.findOne({ title: "Hot Wheels Ultimate Garage" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 170 },

    // Pujas para NERF Elite 2.0 Blaster
    { auctionId: db.auctions.findOne({ title: "NERF Elite 2.0 Blaster" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 75 },
    { auctionId: db.auctions.findOne({ title: "NERF Elite 2.0 Blaster" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 80 },
    { auctionId: db.auctions.findOne({ title: "NERF Elite 2.0 Blaster" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 85 },
    { auctionId: db.auctions.findOne({ title: "NERF Elite 2.0 Blaster" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 90 },
    { auctionId: db.auctions.findOne({ title: "NERF Elite 2.0 Blaster" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 95 },

    // Pujas para Fisher-Price Laugh & Learn Smart Stages Chair
    { auctionId: db.auctions.findOne({ title: "Fisher-Price Laugh & Learn Smart Stages Chair" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 55 },
    { auctionId: db.auctions.findOne({ title: "Fisher-Price Laugh & Learn Smart Stages Chair" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 58 },
    { auctionId: db.auctions.findOne({ title: "Fisher-Price Laugh & Learn Smart Stages Chair" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 61 },
    { auctionId: db.auctions.findOne({ title: "Fisher-Price Laugh & Learn Smart Stages Chair" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 64 },
    { auctionId: db.auctions.findOne({ title: "Fisher-Price Laugh & Learn Smart Stages Chair" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 67 },

    // Pujas para Fender Stratocaster Guitar
    { auctionId: db.auctions.findOne({ title: "Fender Stratocaster Guitar" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1250 },
    { auctionId: db.auctions.findOne({ title: "Fender Stratocaster Guitar" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1300 },
    { auctionId: db.auctions.findOne({ title: "Fender Stratocaster Guitar" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1350 },
    { auctionId: db.auctions.findOne({ title: "Fender Stratocaster Guitar" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1400 },
    { auctionId: db.auctions.findOne({ title: "Fender Stratocaster Guitar" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1450 },

    // Pujas para Yamaha Digital Piano
    { auctionId: db.auctions.findOne({ title: "Yamaha Digital Piano" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 920 },
    { auctionId: db.auctions.findOne({ title: "Yamaha Digital Piano" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 960 },
    { auctionId: db.auctions.findOne({ title: "Yamaha Digital Piano" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1000 },
    { auctionId: db.auctions.findOne({ title: "Yamaha Digital Piano" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1040 },
    { auctionId: db.auctions.findOne({ title: "Yamaha Digital Piano" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1080 },

    // Pujas para Shure SM7B Microphone
    { auctionId: db.auctions.findOne({ title: "Shure SM7B Microphone" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 420 },
    { auctionId: db.auctions.findOne({ title: "Shure SM7B Microphone" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 440 },
    { auctionId: db.auctions.findOne({ title: "Shure SM7B Microphone" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 460 },
    { auctionId: db.auctions.findOne({ title: "Shure SM7B Microphone" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 480 },
    { auctionId: db.auctions.findOne({ title: "Shure SM7B Microphone" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 500 },

    // Pujas para Marshall Bluetooth Speaker
    { auctionId: db.auctions.findOne({ title: "Marshall Bluetooth Speaker" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 320 },
    { auctionId: db.auctions.findOne({ title: "Marshall Bluetooth Speaker" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 340 },
    { auctionId: db.auctions.findOne({ title: "Marshall Bluetooth Speaker" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 360 },
    { auctionId: db.auctions.findOne({ title: "Marshall Bluetooth Speaker" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 380 },
    { auctionId: db.auctions.findOne({ title: "Marshall Bluetooth Speaker" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 400 },

    // Pujas para Roland Electronic Drum Set
    { auctionId: db.auctions.findOne({ title: "Roland Electronic Drum Set" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1050 },
    { auctionId: db.auctions.findOne({ title: "Roland Electronic Drum Set" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Roland Electronic Drum Set" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1150 },
    { auctionId: db.auctions.findOne({ title: "Roland Electronic Drum Set" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Roland Electronic Drum Set" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1250 },

    // Pujas para Star Wars: The Original Trilogy Blu-ray
    { auctionId: db.auctions.findOne({ title: "Star Wars: The Original Trilogy Blu-ray" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 65 },
    { auctionId: db.auctions.findOne({ title: "Star Wars: The Original Trilogy Blu-ray" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 70 },
    { auctionId: db.auctions.findOne({ title: "Star Wars: The Original Trilogy Blu-ray" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 75 },
    { auctionId: db.auctions.findOne({ title: "Star Wars: The Original Trilogy Blu-ray" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 80 },
    { auctionId: db.auctions.findOne({ title: "Star Wars: The Original Trilogy Blu-ray" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 85 },

    // Pujas para The Godfather Collection DVD
    { auctionId: db.auctions.findOne({ title: "The Godfather Collection DVD" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 55 },
    { auctionId: db.auctions.findOne({ title: "The Godfather Collection DVD" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 60 },
    { auctionId: db.auctions.findOne({ title: "The Godfather Collection DVD" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 65 },
    { auctionId: db.auctions.findOne({ title: "The Godfather Collection DVD" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 70 },
    { auctionId: db.auctions.findOne({ title: "The Godfather Collection DVD" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 75 },

    // Pujas para Marvel Cinematic Universe Phase 1 Blu-ray
    { auctionId: db.auctions.findOne({ title: "Marvel Cinematic Universe Phase 1 Blu-ray" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 85 },
    { auctionId: db.auctions.findOne({ title: "Marvel Cinematic Universe Phase 1 Blu-ray" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 90 },
    { auctionId: db.auctions.findOne({ title: "Marvel Cinematic Universe Phase 1 Blu-ray" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 95 },
    { auctionId: db.auctions.findOne({ title: "Marvel Cinematic Universe Phase 1 Blu-ray" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 100 },
    { auctionId: db.auctions.findOne({ title: "Marvel Cinematic Universe Phase 1 Blu-ray" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 105 },

    // Pujas para Harry Potter Complete Series DVD
    { auctionId: db.auctions.findOne({ title: "Harry Potter Complete Series DVD" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 75 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter Complete Series DVD" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 80 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter Complete Series DVD" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 85 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter Complete Series DVD" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 90 },
    { auctionId: db.auctions.findOne({ title: "Harry Potter Complete Series DVD" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 95 },

    // Pujas para Criterion Collection: Parasite
    { auctionId: db.auctions.findOne({ title: "Criterion Collection: Parasite" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 45 },
    { auctionId: db.auctions.findOne({ title: "Criterion Collection: Parasite" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 48 },
    { auctionId: db.auctions.findOne({ title: "Criterion Collection: Parasite" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 51 },
    { auctionId: db.auctions.findOne({ title: "Criterion Collection: Parasite" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 54 },
    { auctionId: db.auctions.findOne({ title: "Criterion Collection: Parasite" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 57 },

    // Pujas para PlayStation 5 Console
    { auctionId: db.auctions.findOne({ title: "PlayStation 5 Console" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 530 },
    { auctionId: db.auctions.findOne({ title: "PlayStation 5 Console" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 560 },
    { auctionId: db.auctions.findOne({ title: "PlayStation 5 Console" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 590 },
    { auctionId: db.auctions.findOne({ title: "PlayStation 5 Console" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 620 },
    { auctionId: db.auctions.findOne({ title: "PlayStation 5 Console" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 650 },

    // Pujas para Nintendo Switch OLED Model
    { auctionId: db.auctions.findOne({ title: "Nintendo Switch OLED Model" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 370 },
    { auctionId: db.auctions.findOne({ title: "Nintendo Switch OLED Model" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 390 },
    { auctionId: db.auctions.findOne({ title: "Nintendo Switch OLED Model" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 410 },
    { auctionId: db.auctions.findOne({ title: "Nintendo Switch OLED Model" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 430 },
    { auctionId: db.auctions.findOne({ title: "Nintendo Switch OLED Model" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 450 },

    // Pujas para Xbox Series X
    { auctionId: db.auctions.findOne({ title: "Xbox Series X" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 530 },
    { auctionId: db.auctions.findOne({ title: "Xbox Series X" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 560 },
    { auctionId: db.auctions.findOne({ title: "Xbox Series X" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 590 },
    { auctionId: db.auctions.findOne({ title: "Xbox Series X" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 620 },
    { auctionId: db.auctions.findOne({ title: "Xbox Series X" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 650 },

    // Pujas para The Legend of Zelda: Tears of the Kingdom
    { auctionId: db.auctions.findOne({ title: "The Legend of Zelda: Tears of the Kingdom" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 75 },
    { auctionId: db.auctions.findOne({ title: "The Legend of Zelda: Tears of the Kingdom" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 80 },
    { auctionId: db.auctions.findOne({ title: "The Legend of Zelda: Tears of the Kingdom" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 85 },
    { auctionId: db.auctions.findOne({ title: "The Legend of Zelda: Tears of the Kingdom" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 90 },
    { auctionId: db.auctions.findOne({ title: "The Legend of Zelda: Tears of the Kingdom" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 95 },

    // Pujas para Elden Ring
    { auctionId: db.auctions.findOne({ title: "Elden Ring" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 64 },
    { auctionId: db.auctions.findOne({ title: "Elden Ring" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 68 },
    { auctionId: db.auctions.findOne({ title: "Elden Ring" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 72 },
    { auctionId: db.auctions.findOne({ title: "Elden Ring" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 76 },
    { auctionId: db.auctions.findOne({ title: "Elden Ring" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 80 },

]);