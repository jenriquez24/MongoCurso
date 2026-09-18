use("store")

db.products.insertOne({
    "name": "smart-tv",
     precio:1200,
    "marca": "samsung"
})

db.products.insertOne({
    "name": "horno micro-ondas",
     precio:450,
    "marca": "LG"
})

db.products.insertOne({
    "name": "Refrigeradora -nofrost",
     precio:1600,
    "marca": "LG"
})



db.products.find()