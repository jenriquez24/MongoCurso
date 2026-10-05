use("sample_trainig")

db.trips.find(
    {tripduration:{$gte:500}},
    {tripduration:1, usertype:1}
)

db.trips.find()