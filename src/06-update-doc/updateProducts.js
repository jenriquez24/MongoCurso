
db.products.find()

db.products.updateOne({
    _id:4
    },
    {
        $set:{
            name:'Nokia',
            price: 950,
            tags:['A','B','C']
    }
        })