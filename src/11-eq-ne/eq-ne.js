
db.inventory.find()

db.inventory.find({qty:20})

db.inventory.find({qty:{$eq:20}})

db.inventory.find(
    {"item.code":"123"}
    )

//using ne
//trer valores noequals a 20
db.inventory.find(
    {qty:{$ne:20}}
    )

// incrementar cantidad a todos los valores que noquals a 20
db.inventory.updateMany(
    {
        qty:{$ne:20}
    },
    {
        $inc:{
            qty:10
        }
    }
)

db.inventory.find()
