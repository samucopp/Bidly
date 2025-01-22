db = db.getSiblingDB("bidly");

// PUJAS
db.bids.insertMany([
    // Pujas para Apple iPhone 14 Max
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1050 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1150 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1250 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 1300 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1350 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1400 },
    { auctionId: db.auctions.findOne({ title: "Apple iPhone 14 Max" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1450 },

    // Pujas para Fitbit Charge 5
    { auctionId: db.auctions.findOne({ title: "Fitbit Charge 5" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 160 },
    { auctionId: db.auctions.findOne({ title: "Fitbit Charge 5" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 170 },
    { auctionId: db.auctions.findOne({ title: "Fitbit Charge 5" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 180 },
    { auctionId: db.auctions.findOne({ title: "Fitbit Charge 5" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 190 },
    { auctionId: db.auctions.findOne({ title: "Fitbit Charge 5" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 200 },

    // Pujas para Apple MacBook Pro (M1)
    { auctionId: db.auctions.findOne({ title: "Apple MacBook Pro (M1)" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1420 },
    { auctionId: db.auctions.findOne({ title: "Apple MacBook Pro (M1)" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1440 },
    { auctionId: db.auctions.findOne({ title: "Apple MacBook Pro (M1)" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 1460 },
    { auctionId: db.auctions.findOne({ title: "Apple MacBook Pro (M1)" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1480 },
    { auctionId: db.auctions.findOne({ title: "Apple MacBook Pro (M1)" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1500 },

    // Pujas para Samsung 55-inch 4K Smart TV
    { auctionId: db.auctions.findOne({ title: "Samsung 55-inch 4K Smart TV" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 700 },
    { auctionId: db.auctions.findOne({ title: "Samsung 55-inch 4K Smart TV" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 750 },
    { auctionId: db.auctions.findOne({ title: "Samsung 55-inch 4K Smart TV" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 800 },
    { auctionId: db.auctions.findOne({ title: "Samsung 55-inch 4K Smart TV" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 850 },
    { auctionId: db.auctions.findOne({ title: "Samsung 55-inch 4K Smart TV" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 900 },

    // Pujas para Bose QuietComfort 35 II
    { auctionId: db.auctions.findOne({ title: "Bose QuietComfort 35 II" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 520 },
    { auctionId: db.auctions.findOne({ title: "Bose QuietComfort 35 II" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 545 },
    { auctionId: db.auctions.findOne({ title: "Bose QuietComfort 35 II" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 570 },
    { auctionId: db.auctions.findOne({ title: "Bose QuietComfort 35 II" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 595 },
    { auctionId: db.auctions.findOne({ title: "Bose QuietComfort 35 II" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 620 },

    // Pujas para Canon EOS R5
    { auctionId: db.auctions.findOne({ title: "Canon EOS R5" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 3320 },
    { auctionId: db.auctions.findOne({ title: "Canon EOS R5" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 3340 },
    { auctionId: db.auctions.findOne({ title: "Canon EOS R5" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 3360 },
    { auctionId: db.auctions.findOne({ title: "Canon EOS R5" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 3380 },
    { auctionId: db.auctions.findOne({ title: "Canon EOS R5" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 3400 },

    // Pujas para Apple AirPods Pro (2nd Generation)
    { auctionId: db.auctions.findOne({ title: "Apple AirPods Pro (2nd Generation)" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 210 },
    { auctionId: db.auctions.findOne({ title: "Apple AirPods Pro (2nd Generation)" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 220 },
    { auctionId: db.auctions.findOne({ title: "Apple AirPods Pro (2nd Generation)" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 230 },
    { auctionId: db.auctions.findOne({ title: "Apple AirPods Pro (2nd Generation)" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 240 },
    { auctionId: db.auctions.findOne({ title: "Apple AirPods Pro (2nd Generation)" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 250 },

    // Pujas para Stone Inlay Mosaic Tabletop
    { auctionId: db.auctions.findOne({ title: "Stone Inlay Mosaic Tabletop" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 1250 },
    { auctionId: db.auctions.findOne({ title: "Stone Inlay Mosaic Tabletop" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 1300 },
    { auctionId: db.auctions.findOne({ title: "Stone Inlay Mosaic Tabletop" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 1350 },
    { auctionId: db.auctions.findOne({ title: "Stone Inlay Mosaic Tabletop" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 1400 },
    { auctionId: db.auctions.findOne({ title: "Stone Inlay Mosaic Tabletop" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1450 },

    // Pujas para Dior J'Adior Slingback Pumps
    { auctionId: db.auctions.findOne({ title: "Dior J'Adior Slingback Pumps" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 1000 },
    { auctionId: db.auctions.findOne({ title: "Dior J'Adior Slingback Pumps" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 1100 },
    { auctionId: db.auctions.findOne({ title: "Dior J'Adior Slingback Pumps" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 1200 },
    { auctionId: db.auctions.findOne({ title: "Dior J'Adior Slingback Pumps" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 1300 },
    { auctionId: db.auctions.findOne({ title: "Dior J'Adior Slingback Pumps" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 1400 },

    // Pujas para Balmain Double-Breasted Blazer
    { auctionId: db.auctions.findOne({ title: "Balmain Double-Breasted Blazer" })._id, userId: db.users.findOne({ email: "grace@example.com" })._id, amount: 1900 },
    { auctionId: db.auctions.findOne({ title: "Balmain Double-Breasted Blazer" })._id, userId: db.users.findOne({ email: "henry@example.com" })._id, amount: 2000 },
    { auctionId: db.auctions.findOne({ title: "Balmain Double-Breasted Blazer" })._id, userId: db.users.findOne({ email: "irene@example.com" })._id, amount: 2100 },
    { auctionId: db.auctions.findOne({ title: "Balmain Double-Breasted Blazer" })._id, userId: db.users.findOne({ email: "jack@example.com" })._id, amount: 2200 },
    { auctionId: db.auctions.findOne({ title: "Balmain Double-Breasted Blazer" })._id, userId: db.users.findOne({ email: "alice@example.com" })._id, amount: 2300 },

    // Bottega Veneta Padded Cassette Bag
    { auctionId: db.auctions.findOne({ title: "Bottega Veneta Padded Cassette Bag" })._id, userId: db.users.findOne({ email: "bob@example.com" })._id, amount: 2820 },
    { auctionId: db.auctions.findOne({ title: "Bottega Veneta Padded Cassette Bag" })._id, userId: db.users.findOne({ email: "carol@example.com" })._id, amount: 2830 },
    { auctionId: db.auctions.findOne({ title: "Bottega Veneta Padded Cassette Bag" })._id, userId: db.users.findOne({ email: "dave@example.com" })._id, amount: 2840 },
    { auctionId: db.auctions.findOne({ title: "Bottega Veneta Padded Cassette Bag" })._id, userId: db.users.findOne({ email: "eve@example.com" })._id, amount: 2850 },
    { auctionId: db.auctions.findOne({ title: "Bottega Veneta Padded Cassette Bag" })._id, userId: db.users.findOne({ email: "frank@example.com" })._id, amount: 2860 }

]);
