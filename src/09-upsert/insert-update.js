
db.iot.find()

db.iot.insertOne({
    sensor:"A001",
    date:"2022-01-03",
    readings:[1]
})


db.iot.updateOne(
    {
        sensor:"A001",
        date:"2022-01-03",
    },{
        $push:{
            readings:[2]
        }
    }
)

push // puede eliminar un elemento del array segun la posicion (primero o ultimo)
db.iot.updateOne(
    {
        sensor:"A001",
        date:"2022-01-03"
    },
    {
        $pop:{
            readings: 1 // 1 indica que va borrar el ultimo registro insertado // -1 primer elemento
        }
    }
)
// una vez corregido readings procedemos a insertar correctamente

    db.iot.updateOne(
    {
        sensor:"A001",
        date:"2022-01-03",
    },{
        $push:{
            readings:2 // si corchetes
        }
    }
)

db.iot.find()

// uso de upsert sino existe registra inserta sino actualiza

    db.iot.updateOne(
    {
        sensor:"A001",
        date:"2022-01-04",
    },{
        $push:{
            readings:1
        }
    },{upsert:true}
)