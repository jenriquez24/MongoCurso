
db.products.drop()

db.products.insertMany([
    {
        _id:1,
        "name": "smart-tv",
        precio:1200,
        "marca": "samsung"
    },
    {
        _id:2,
        "name": "horno micro-ondas",
        precio:450,
        "marca": "LG"
    },
        {
        _id:3,
        "name": "Equipo de sonido",
        precio:830,
        "marca": "SONY"
    },
        {
        _id:1,
        "name": "celular android",
        precio:900,
        "marca": "XIOMI"
    },
    {
        _id:4,
        "name": "celular android",
        precio:900,
        "marca": "XIOMI"
    },

],{ordered:false})

// la instruccion ordered:false indica que si hay dupñiciddde key, insertar los q no tengan duplicidad

db.products.find()