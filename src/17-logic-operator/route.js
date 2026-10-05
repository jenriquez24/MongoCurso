use("sample_training")

db.routes.find()

db.routes.find(
    {airplane:"E70"}
)

// el aeropuerto u origen sea Bogota
db.routes.find(
    {
        $or:[
            {src_airport:"BOG"},
            {dst_airport:"BOG"}
            ]
    }
)

// buscar si el vuelo E70 aterrizò o despegò desde Bogota

db.routes.find({
    $and:[
        {airplane:"E70"},
        {
            $or:[
                {src_airport:"BOG"},
                {dst_airport:"BOG"}
            ]
        }

    ]
})