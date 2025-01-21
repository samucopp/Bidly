db = db.getSiblingDB("bidly");

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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(Date.now() + 604800000),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
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
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
]);

//SUBASTAS CATEGORIA "BOOKS"
db.auctions.insertMany([
    {
        title: "To Kill a Mockingbird",
        description: "Harper Lee's Pulitzer Prize-winning novel set in the 1930s Deep South, addressing racial injustice and moral growth.",
        images: ["to_kill_a_mockingbird.jpg"],
        category: db.categories.findOne({ name: "Books" })._id,
        startingPrice: 20,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
        endTime: new Date(Date.now() + 604800000),
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

//SUBASTAS CATEGORIA "FURNITURE"
db.auctions.insertMany([
    {
        title: "IKEA LACK Coffee Table",
        description: "Simple and affordable coffee table that fits any living room style.",
        images: ["lack_coffee_table.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Herman Miller Aeron Chair",
        description: "Ergonomic office chair with adjustable features and breathable mesh material.",
        images: ["herman_miller_aeron.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "West Elm Mid-Century Desk",
        description: "Stylish wooden desk with a clean silhouette and ample storage for home offices.",
        images: ["west_elm_mid_century_desk.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 350,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pottery Barn Dining Table",
        description: "Farmhouse-style dining table made of reclaimed wood, perfect for family gatherings.",
        images: ["pottery_barn_dining_table.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Ashley Furniture Signature Sofa",
        description: "Traditional-style sofa with plush cushions and a sturdy hardwood frame.",
        images: ["ashley_signature_sofa.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 450,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Eames Lounge Chair and Ottoman",
        description: "Iconic mid-century modern chair set, built with premium leather and molded plywood.",
        images: ["eames_lounge_chair.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "CB2 Connoisseur Bar Cabinet",
        description: "Sleek and modern bar cabinet with wine racks and storage for barware.",
        images: ["cb2_connoisseur_bar_cabinet.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Wayfair Cross-Leg Vanity Table",
        description: "Modern vanity table with a sleek cross-leg design and built-in drawer for storage.",
        images: ["wayfair_cross_leg_vanity_table.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "IKEA BILLY Bookcase",
        description: "Classic and versatile bookcase design from IKEA, great for any room.",
        images: ["ikea_billy_bookcase.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 80,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 24 hours from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Walker Edison 58\" Wood TV Stand",
        description: "Sturdy television stand made of high-grade MDF with adjustable shelves and cable management.",
        images: ["walker_edison_wood_tv_stand.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 180,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Room & Board Parsons Desk",
        description: "Minimalistic desk with clean lines, perfect for any home office setup.",
        images: ["room_and_board_parsons_desk.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Safavieh Vintage Hamadan Rug",
        description: "Distressed vintage-style rug made with durable materials for long-lasting beauty.",
        images: ["safavieh_vintage_rug.jpg"],
        category: db.categories.findOne({ name: "Furniture" })._id,
        startingPrice: 100,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "ART"
db.auctions.insertMany([
    {
        title: "Picasso Print: The Weeping Woman",
        description: "High-quality print of Picasso's famous work.",
        images: ["picasso_print.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Van Gogh Print: The Starry Night",
        description: "High-quality print of Van Gogh's iconic masterpiece.",
        images: ["van_gogh_starry_night.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 150,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "Monet Print: Water Lilies",
        description: "Beautiful reproduction of Claude Monet's Water Lilies series.",
        images: ["monet_water_lilies.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 180,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Da Vinci Print: Mona Lisa",
        description: "Museum-quality print of Leonardo da Vinci's timeless portrait.",
        images: ["da_vinci_mona_lisa.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Klimt Print: The Kiss",
        description: "Gold-hued print of Gustav Klimt's celebrated work from his Golden Phase.",
        images: ["klimt_the_kiss.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 220,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Warhol Print: Marilyn Monroe",
        description: "Vibrant pop art print of Andy Warhol's iconic Marilyn series.",
        images: ["warhol_marilyn_monroe.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Munch Print: The Scream",
        description: "High-resolution reproduction of Edvard Munch's famous expressionist painting.",
        images: ["munch_the_scream.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Michelangelo Print: Creation of Adam",
        description: "High-definition print of the iconic fresco from the Sistine Chapel.",
        images: ["michelangelo_creation_of_adam.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 320,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Frida Kahlo Print: Self-Portrait with Thorn Necklace",
        description: "Striking print of one of Frida Kahlo's most famous self-portraits, showcasing her surreal and introspective style.",
        images: ["frida_kahlo_self_portrait_thorn_necklace.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Hand-Blown Glass Vase by Murano Artisan",
        description: "Unique, vibrant glass vase crafted by a skilled Murano glassblower in Venice, Italy.",
        images: ["murano_glass_vase.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 350,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Bronze Sculpture: The Embrace",
        description: "A limited-edition bronze sculpture depicting two figures in an embrace, signed by the sculptor.",
        images: ["bronze_sculpture_embrace.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Ceramic Vase by Soo-Jin Kim",
        description: "Hand-thrown ceramic vase with a layered glaze technique, blending traditional and modern aesthetics.",
        images: ["soo_jin_kim_ceramic_vase.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 220,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Stone Inlay Mosaic Tabletop",
        description: "Exquisite mosaic table surface crafted with semi-precious stones set in marble.",
        images: ["stone_inlay_mosaic.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Contemporary Mixed Media Piece: Urban Layers",
        description: "Collage of newspaper clippings, acrylic paint, and found objects that reflect modern city life.",
        images: ["mixed_media_urban_layers.jpg"],
        category: db.categories.findOne({ name: "Art" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "ANTIQUITIES"
db.auctions.insertMany([
    {
        title: "Roman Coin",
        description: "Ancient Roman coin in excellent condition.",
        images: ["roman_coin.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "Sumerian Clay Tablet",
        description: "An ancient cuneiform tablet from Mesopotamia, detailing trade records.",
        images: ["sumerian_clay_tablet.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Indus Valley Pottery Shard",
        description: "A decorated pottery piece from the Indus Valley Civilization, circa 2500 BCE.",
        images: ["indus_valley_pottery.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Celtic Torc",
        description: "A rare bronze neck ring from the Iron Age, bearing spiral motifs.",
        images: ["celtic_torc.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Phoenician Glass Vessel",
        description: "A beautifully crafted ancient glass container from Phoenicia.",
        images: ["phoenician_glass_vessel.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Aztec Stone Carving",
        description: "A small stone artifact featuring intricate Aztec symbols and glyphs.",
        images: ["aztec_stone_carving.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Mayan Jade Mask",
        description: "Exquisitely carved jade mask from the Mayan civilization, possibly for ceremonial use.",
        images: ["mayan_jade_mask.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 1000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 518400000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Persian Miniature Painting",
        description: "Delicately detailed miniature artwork from the Persian tradition, featuring vibrant colors.",
        images: ["persian_miniature_painting.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Viking Bronze Brooch",
        description: "Authentic oval brooch used by Viking women for fastening garments.",
        images: ["viking_brooch.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 691200000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Bronze Age Spearhead",
        description: "Well-preserved spearhead crafted in the Bronze Age, with a tapered blade and socket.",
        images: ["bronze_age_spearhead.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 777600000),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Byzantine Icon",
        description: "Religious icon from the Byzantine Empire, featuring traditional gold leaf accents.",
        images: ["byzantine_icon.jpg"],
        category: db.categories.findOne({ name: "Antiquities" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 864000000),
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "JEWELRY"
db.auctions.insertMany([
    {
        title: "Cartier Love Bracelet",
        description: "Iconic bracelet from Cartier's Love collection.",
        images: ["cartier_love.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 5000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "Bvlgari B.Zero1 Ring",
        description: "Iconic spiral band ring from Bvlgari’s B.Zero1 collection.",
        images: ["bvlgari_bzero1_ring.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 5000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 2),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "David Yurman Cable Bracelet",
        description: "Signature twisted cable bracelet with sterling silver and 14K gold tips.",
        images: ["david_yurman_cable_bracelet.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 1500,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 3),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Harry Winston Diamond Studs",
        description: "Timeless diamond stud earrings from Harry Winston, featuring brilliant-cut diamonds.",
        images: ["harry_winston_diamond_studs.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 9000,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 4),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Graff Diamond Pendant",
        description: "A luxurious diamond pendant from Graff, set in platinum with impeccable craftsmanship.",
        images: ["graff_diamond_pendant.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 25000,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 5),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pandora Charm Bracelet",
        description: "Classic silver Pandora bracelet with two starter charms included.",
        images: ["pandora_charm_bracelet.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 300,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 1),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Cartier Juste un Clou Bracelet",
        description: "A modern nail-inspired bracelet crafted in 18K rose gold by Cartier.",
        images: ["cartier_juste_un_clou.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 4000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 6),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Gucci Link Necklace",
        description: "Stylish sterling silver link necklace from Gucci, perfect for layering or wearing alone.",
        images: ["gucci_link_necklace.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 3),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Mikimoto Pearl Necklace",
        description: "A strand of premium Akoya pearls from Mikimoto, renowned for their luster and elegance.",
        images: ["mikimoto_pearl_necklace.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 8000,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 4),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Piaget Rose Gold Earrings",
        description: "Elegant Piaget earrings in 18K rose gold, featuring intricate detailing.",
        images: ["piaget_rose_gold_earrings.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 6000,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 5),
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Swarovski Crystal Set",
        description: "Matching necklace and earrings set featuring sparkling Swarovski crystals.",
        images: ["swarovski_crystal_set.jpg"],
        category: db.categories.findOne({ name: "Jewelry" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 2),
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "CLOTHING"
db.auctions.insertMany([
    {
        title: "Nike Air Max 90",
        description: "Classic Nike sneakers in a variety of colors.",
        images: ["nike_air_max.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "Louis Vuitton Neverfull MM",
        description: "Iconic LV tote with a monogram pattern and spacious interior.",
        images: ["lv_neverfull_mm.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1500,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Chanel Classic Flap Bag",
        description: "Timeless quilted flap bag with the signature CC turn-lock and gold-tone hardware.",
        images: ["chanel_classic_flap.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 5000,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Balenciaga Triple S Sneakers",
        description: "High-fashion chunky sneakers featuring a multilayered sole and oversized silhouette.",
        images: ["balenciaga_triple_s.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Dior J'Adior Slingback Pumps",
        description: "Elegant slingback heels with the J'Adior ribbon detail.",
        images: ["dior_jadior_pumps.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 950,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Prada Re-Edition 2005 Nylon Bag",
        description: "Modern re-edition of Prada's iconic nylon bag with metal logo plaque.",
        images: ["prada_re_edition_2005.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Versace Baroque Print Robe",
        description: "Luxurious silk robe with the iconic Versace baroque pattern and bold branding.",
        images: ["versace_baroque_robe.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Burberry Trench Coat",
        description: "Classic Burberry trench with the iconic check lining and belted silhouette.",
        images: ["burberry_trench.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1300,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Fendi Baguette Bag",
        description: "Signature Fendi baguette crafted in premium leather with the iconic FF clasp.",
        images: ["fendi_baguette.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 2200,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Off-White Arrows Hoodie",
        description: "Streetwear staple with the signature Off-White arrow graphic on the back.",
        images: ["off_white_arrows_hoodie.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Balmain Double-Breasted Blazer",
        description: "Fitted blazer with padded shoulders and gold-tone embossed buttons.",
        images: ["balmain_double_breasted_blazer.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1800,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Hermès Birkin Bag 30",
        description: "Iconic handcrafted Hermès Birkin made of premium Togo leather, featuring palladium hardware.",
        images: ["hermes_birkin_30.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 10000,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Moncler Maya Down Jacket",
        description: "Stylish quilted down jacket offering warmth and comfort, featuring the signature Moncler logo patch.",
        images: ["moncler_maya_jacket.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1250,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Valentino Rockstud Pumps",
        description: "Luxury pointed-toe pumps adorned with the signature Valentino Rockstud detailing.",
        images: ["valentino_rockstud_pumps.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 900,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Alexander McQueen Oversized Sneakers",
        description: "Chunky statement sneakers featuring a thick sole and minimalist design.",
        images: ["alexander_mcqueen_oversized_sneakers.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Saint Laurent Sac de Jour",
        description: "Structured tote in smooth leather with clean lines and metal feet for durability.",
        images: ["saint_laurent_sac_de_jour.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 2200,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Bottega Veneta Padded Cassette Bag",
        description: "Signature intrecciato woven leather in a modern, puffy design with a magnetic closure.",
        images: ["bottega_veneta_padded_cassette.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 2800,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Tom Ford Two-Piece Suit",
        description: "Exquisitely tailored suit in wool with peak lapels and a sharp silhouette.",
        images: ["tom_ford_two_piece_suit.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 3000,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 518400000), // 6 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Christian Louboutin So Kate 120",
        description: "Iconic stiletto pumps with a pointed toe and the signature red sole.",
        images: ["christian_louboutin_so_kate_120.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 750,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Givenchy Antigona Bag",
        description: "Structured, geometric shape with top handles and a detachable shoulder strap.",
        images: ["givenchy_antigona.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 1900,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Cartier Silk Scarf",
        description: "Luxurious silk scarf adorned with a delicate Cartier motif, perfect as a neckerchief or hair accessory.",
        images: ["cartier_silk_scarf.jpg"],
        category: db.categories.findOne({ name: "Clothing" })._id,
        startingPrice: 450,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "TOYS"
/* db.auctions.insertMany([
    {
        title: "LEGO Star Wars Millennium Falcon",
        description: "Detailed LEGO set of the iconic Millennium Falcon.",
        images: ["lego_falcon.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 150,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "LEGO Star Wars UCS Imperial Star Destroyer",
        description: "Massive collector’s set featuring over 4,700 pieces to build the fearsome Imperial flagship.",
        images: ["lego_star_destroyer.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 800,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "LEGO Star Wars UCS Death Star",
        description: "Iconic Death Star set loaded with minifigures and interactive scenes from the Star Wars saga.",
        images: ["lego_death_star.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "LEGO Technic Liebherr R 9800 Excavator",
        description: "Advanced and massive Technic set equipped with multiple motors and app-controlled features.",
        images: ["lego_liebherr_excavator.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 450,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "LEGO Creator Expert Titanic",
        description: "Remarkably detailed 9,000+ piece replica of the RMS Titanic, measuring over 4 feet in length.",
        images: ["lego_creator_titanic.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 650,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "LEGO Technic Bugatti Chiron",
        description: "High-end supercar model featuring a replica W16 engine, Technic gearbox, and authentic interior details.",
        images: ["lego_bugatti_chiron.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Transformers Masterpiece MP-44 Optimus Prime",
        description: "Premium Masterpiece series Optimus Prime figure featuring G1-accurate design and accessories.",
        images: ["transformers_mp44_optimus_prime.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 450,
        sellerId: db.users.findOne({ email: "grace@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Sideshow Collectibles Darth Vader Premium Format Figure",
        description: "High-end polystone statue with fabric cape and detailed armor, capturing the menacing Sith Lord.",
        images: ["sideshow_darth_vader.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 650,
        sellerId: db.users.findOne({ email: "irene@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Bandai Hobby Star Wars 1/72 X-Wing Starfighter",
        description: "Highly detailed model kit of the classic X-Wing, featuring movable S-foils and cockpit details.",
        images: ["bandai_xwing_model.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 80,
        sellerId: db.users.findOne({ email: "jack@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Barbie Collector 60th Anniversary Doll",
        description: "Limited edition Barbie doll celebrating 60 years, with special packaging and commemorative details.",
        images: ["barbie_60th_anniversary.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "frank@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 518400000), // 6 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Meccano Erector Super Construction Set",
        description: "Large-scale construction kit with motorized parts, enabling the creation of various mechanical models.",
        images: ["meccano_super_construction_set.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 120,
        sellerId: db.users.findOne({ email: "grace@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "NECA Teenage Mutant Ninja Turtles 4-Pack",
        description: "Collector’s edition set featuring the four Turtles with accurate detailing, weapons, and alternate hands.",
        images: ["neca_tmnt_4pack.jpg"],
        category: db.categories.findOne({ name: "Toys" })._id,
        startingPrice: 200,
        sellerId: db.users.findOne({ email: "hank@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    }
]); */

//SUBASTAS CATEGORIA "MUSIC"
db.auctions.insertMany([
    {
        title: "Fender Stratocaster Guitar",
        description: "Iconic electric guitar for all music styles.",
        images: ["fender_stratocaster.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 1200,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "Gibson Les Paul Standard",
        description: "Classic electric guitar known for its rich tone and sustain.",
        images: ["gibson_les_paul_standard.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 1400,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 1 day
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Ibanez SR505 Bass Guitar",
        description: "5-string bass guitar with a slim neck and versatile active pickups.",
        images: ["ibanez_sr505_bass.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 700,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Ludwig Supraphonic Snare Drum",
        description: "Legendary snare drum delivering a bright, crisp tone for any music style.",
        images: ["ludwig_supraphonic_snare.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 600,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Korg MS-20 Mini Synth",
        description: "Analog synthesizer with patchable connections and classic filters.",
        images: ["korg_ms20_mini.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 500,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Boss RC-505 Loop Station",
        description: "Tabletop looping device with multiple tracks, effects, and hands-on control.",
        images: ["boss_rc_505.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 400,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Audio-Technica ATH-M50x Headphones",
        description: "Popular studio-monitor headphones known for their accurate sound reproduction.",
        images: ["audio_technica_ath_m50x.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 150,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 518400000), // 6 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "AKG C214 Microphone",
        description: "Large-diaphragm condenser microphone ideal for vocals and acoustic instruments.",
        images: ["akg_c214.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 350,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pioneer DDJ-400 DJ Controller",
        description: "Beginner-friendly DJ controller with professional features and rekordbox integration.",
        images: ["pioneer_ddj_400.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 250,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 691200000), // 8 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Moog Subsequent 37 Synthesizer",
        description: "Powerful analog synthesizer featuring classic Moog sound with modern enhancements.",
        images: ["moog_subsequent_37.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 1500,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 777600000), // 9 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Behringer X32 Compact Mixer",
        description: "Digital mixing console with 40 input channels, integrated effects, and motorized faders.",
        images: ["behringer_x32_compact.jpg"],
        category: db.categories.findOne({ name: "Music" })._id,
        startingPrice: 2300,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 864000000), // 10 days
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "MOVIES"
db.auctions.insertMany([
    {
        title: "Star Wars: The Original Trilogy Blu-ray",
        description: "Box set of the original Star Wars trilogy.",
        images: ["star_wars_trilogy.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(),
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
    {
        title: "The Lord of the Rings Trilogy Extended Edition",
        description: "All three films in extended form, filled with bonus materials.",
        images: ["lotr_extended.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 90,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(), // 24 hours from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Back to the Future Trilogy Blu-ray",
        description: "Follow Marty McFly's adventures through time in this three-movie set.",
        images: ["bttf_trilogy.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 45,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 48 hours
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Indiana Jones: The Complete Adventures",
        description: "Join Indy on his quest for the Ark, the Sankara Stones, the Holy Grail, and the Crystal Skull.",
        images: ["indiana_jones_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 72 hours
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Studio Ghibli Collection",
        description: "A set of beloved animated films from Hayao Miyazaki and Studio Ghibli.",
        images: ["studio_ghibli_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 100,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "James Bond: Daniel Craig Collection",
        description: "All Daniel Craig Bond films: Casino Royale, Quantum of Solace, Skyfall, Spectre, and No Time to Die.",
        images: ["bond_daniel_craig.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 85,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pirates of the Caribbean 5-Movie Collection",
        description: "All five swashbuckling adventures of Captain Jack Sparrow on Blu-ray.",
        images: ["pirates_caribbean_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "alice@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 518400000), // 6 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Fast & Furious 8-Movie Collection",
        description: "Experience the high-octane action from the first eight Fast & Furious films.",
        images: ["fast_and_furious_8_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 65,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Avatar 2-Movie Collection (Avatar & The Way of Water)",
        description: "The groundbreaking original film plus its sequel in a special 2-movie set.",
        images: ["avatar_2movie_collection.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 75,
        sellerId: db.users.findOne({ email: "carol@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 8), // 8 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Jurassic Park 5-Movie Collection",
        description: "All the dinosaur adventures in one set, from the original Jurassic Park to Jurassic World: Fallen Kingdom.",
        images: ["jurassic_park_5movie.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 55,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 86400000 * 2), // 2 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Alien Quadrilogy Blu-ray",
        description: "Four classic sci-fi horror films featuring Ellen Ripley against the terrifying Xenomorph.",
        images: ["alien_quadrilogy.jpg"],
        category: db.categories.findOne({ name: "Movies" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 72 hours
        status: "inactive",
        createdAt: new Date()
    }
]);

//SUBASTAS CATEGORIA "GAMES"
db.auctions.insertMany([
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
    {
        title: "God of War: Ragnarök",
        description: "Epic action-adventure game continuing Kratos and Atreus's saga.",
        images: ["god_of_war_ragnarok.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Horizon Forbidden West",
        description: "Open-world action RPG set in a post-apocalyptic world filled with robotic creatures.",
        images: ["horizon_forbidden_west.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Final Fantasy XVI",
        description: "Latest installment in the legendary JRPG series, featuring a new world and characters.",
        images: ["final_fantasy_xvi.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 70,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Super Mario Odyssey",
        description: "3D platformer featuring Mario traveling across various worlds to save Princess Peach.",
        images: ["super_mario_odyssey.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Animal Crossing: New Horizons",
        description: "Relaxing life simulation game where you build and decorate your own island getaway.",
        images: ["animal_crossing_new_horizons.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days from now
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Pokémon Scarlet",
        description: "New generation of Pokémon with an open-world design and fresh creatures to discover.",
        images: ["pokemon_scarlet.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 60,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 432000000), // 5 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Red Dead Redemption 2",
        description: "Western-themed open-world game from Rockstar, featuring an immersive storyline.",
        images: ["red_dead_redemption_2.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 40,
        sellerId: db.users.findOne({ email: "dave@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 604800000), // 7 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "Cyberpunk 2077",
        description: "Futuristic open-world RPG set in Night City, with deep character customization.",
        images: ["cyberpunk_2077.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 259200000), // 3 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "The Witcher 3: Wild Hunt",
        description: "Critically acclaimed action RPG featuring Geralt of Rivia in a vast fantasy world.",
        images: ["the_witcher_3_wild_hunt.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 30,
        sellerId: db.users.findOne({ email: "bob@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 345600000), // 4 days
        status: "inactive",
        createdAt: new Date()
    },
    {
        title: "FIFA 23",
        description: "Latest entry in the FIFA series with updated teams, realistic graphics, and new features.",
        images: ["fifa_23.jpg"],
        category: db.categories.findOne({ name: "Games" })._id,
        startingPrice: 50,
        sellerId: db.users.findOne({ email: "eve@example.com" })._id,
        startTime: new Date(),
        endTime: new Date(Date.now() + 172800000), // 2 days
        status: "inactive",
        createdAt: new Date()
    }
]);