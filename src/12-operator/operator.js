
db.inventory.find()

//using $gt(>) & $gte(>=)

db.inventory.find(
    {qty:{$gt:20}}
)

// >= 20
db.inventory.find({qty:{$gte:20}})

// using $lt (<) && $lte(<=)

db.inventory.find({qty:{$lt:30}})

db.inventory.find({qty:{$lte:35}})

//join
// productos cuya cantidad sea >=25 and <= 40
db.inventory.find(
    {qty:{$gte:25, $lte:40}}
    )

db.inventory.find(
    {"item.name":"item ab",
    qty:{$gte:20, $lte:25
        }
    }
)

// item name no sea: ab y la cantidad >=20 <=25
db.inventory.find(
    {
        "item.name":{$ne:"item ab"},
        qty:{$gte:20,$lte:25}

        }
)

