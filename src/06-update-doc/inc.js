db.products.find()

//$inc se usa para valores numericos, se usa para incrementar
//incrementa x al valor original. Ejm si el valor es 200 $inc incrementa 200 + x

db.products.updateOne(
    {
        _id:4
    },
    {
        $inc:{
            precio:100
        }
    }
)

db.products.find()