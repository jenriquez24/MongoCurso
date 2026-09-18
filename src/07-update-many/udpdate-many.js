
db.zips.find().count()
db.zips.find()

db.zips.find({
    city:"CLEVELAND"
}).count()

db.zips.updateMany(
    {
        city:"CLEVELAND"
    },
    {
        $inc:{
            pop:200
        }
    }
)

db.zips.find()

db.zips.find(
    {_id: ObjectId("5c8eccc1caa187d17ca6f1b7")}
)

    //5c8eccc1caa187d17ca6ed29 2369
    //5c8eccc1caa187d17ca6f1b7 1244