
db.inventory.find()

// documemtos que contengan en su descripcion la palabra line
db.inventory.find(
    {
        "item.description":{$regex:/line/}
    }
)

// agregando i al final indicamos que no importa si la exp està en mayus o minusc.
db.inventory.find(
    {
        "item.description":{$regex:/LINE/i}
    }
)

// texto que termine en line ($)
db.inventory.find(
    {
        "item.description":{$regex:/line$/i}
    }
)

// texto que inicie con la palabra single (^)
db.inventory.find(
    {"item.description":{$regex:/^single/i}}
)

// buscar tooos los documentos que inicien con una S
//m para indicar asi tenga salto de linea
db.inventory.find(
    {"item.description":{$regex:/^s/im}}
)

//First line
//Second line