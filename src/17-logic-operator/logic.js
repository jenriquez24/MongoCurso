use("sample_training")

//and implicit
db.inspections.find(
    {sector:"Tax Preparers - 891",
        result:"Unable to Locate"
        }
).count()

//and explicit
//$and:[{}.{}]
db.inspections.find(
    {
    $and:[
            {sector:"Tax Preparers - 891"},
            { result:"Unable to Locate"}
        ]
    }
).count()

// $or:[{}.{}]
db.inspections.find(
    {
        $or:[
            {sector:"Tax Preparers - 891"},
            {result:"Unable to Locate"}
        ]
    }
).count()

//$nor excluye
db.inspections.find(
    {
        $nor:[
                {sector:"Tax Preparers - 891"},
                {result:"Unable to Locate"}
            ]
    }
)

db.inspections.find(
    {
        $nor:[
            {result:"No Violation Issued"},
            {result:"Unable to locate"}
            ]
    },
    {
        result:1,
        _id:0
    }
)

//$not = {se aplica a un atributo en especifico usando la negaciòn}
// no arrays
db.inspections.find(
    {result:{$not:{$regex:/Unable to Locate/}}
    }
)

