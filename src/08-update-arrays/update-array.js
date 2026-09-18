
db.inventory.find()

// push solo funciona para agregar elementos a un array

db.inventory.updateOne({_id:4},
    {
        $push:{
            tags:"headphone"
        }
    }
)

db.inventory.find()

// pull quita elementos de un array

db.inventory.updateMany(
    { },// indica que va aplicar a todos los eleentos
    {
        $pull:{
            tags:"book"
        }
    }
    )

db.inventory.find()

// quitar varios elementos con $in
db.inventory.updateMany(
    { },
    {
        $pull:{
            tags:{$in:["appliance", "school"]}
        }
    }
)
