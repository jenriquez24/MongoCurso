use("store")

//operador $in for values & arrays

db.inventory.find(
    {
        qty:{$in:[20,25]}
    }
)

db.inventory.find(
    {tags:{$in:["book","electronics"]}
        }
)

//$nin, funciona al contario de $in
// for values & arrays
db.inventory.find(
    {tags:{$nin:["book","electronics"]}}
)

// arrays

db.inventory.find({tags:"book"})

db.inventory.find(
    {tags:["school", "book"]}
 )

db.inventory.find(
    {tags:["book", "school"]}
 )

//arrays $all
//bucar array q contenga los dos elememtos sin importar el orden
db.inventory.find(
    {tags:{$all:["book","school"]}}
)

//$size - buscar arrays q contengan dos elementos
db.inventory.find(
    {tags:{$size:2}}
)

//$elementMatch
//buscar docs q contengan campo de tipo arreglo xxx:[{"campo":"xxx", campo2:"AAA"}]
db.survey.find(
    {results:{$elemMatch:{product:"abc"}}}
)

db.survey.find(
    {results:{
        $elemMatch:{
            product:"xyz",
            score:{$gte:7}}}}
)

db.survey.find()

