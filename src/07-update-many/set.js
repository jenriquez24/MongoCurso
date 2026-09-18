db.zips.find()

db.zips.updateMany(
    {city: "CLEVELAND"},
    {
        $set:{
            myAttr:"EXC"
        }
    }
)

//$rename cambia el nombre de atributo (campo) sin necesidad de borrarlo, solo cambia el campo no el valor

db.zips.updateMany(
    {
        city:"CLEVELAND"
    },
    {
        $rename:{
            myAttr:"my_data"
        }
    }
)

db.zips.find({})

//$unset borra atributo de la coleccion

db.zips.updateMany(
    {city:"CLEVELAND"},
    {
        $unset:{
            my_data:""
        }
    })

db.zips.find()