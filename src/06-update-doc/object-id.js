db.products.find()

db.products.updateOne(
    {_id: ObjectId("6aad5e77c581c33c074a46f8")},
    {
        $inc:{
            precio:50
        }
    }
)

