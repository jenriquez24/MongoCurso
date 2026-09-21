
db.iot.find()

// borrar elementos del array con sean >= 3

db.iot.updateMany(
    {
        sensor:"A001"
    },
    {
        $pull:{
            readings:{$gte:3}
        }
    }
)

db.iot.find()