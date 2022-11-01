db.docs.find({})


db.docs.aggregate([
    {
        $addFields: {

            "area": {
                "value": {
                    $multiply: ["$size.h", "$size.w"]
                },
                "unit": "$size.uom"
            }
        }
    },
    {
        $group: { _id: "$status", avgArea: { $avg: "$area.value" } }
    }
])

db.vehicles.insertMany(
    [
        { _id: 1, type: "car", specs: { doors: 4, wheels: 4 } },
        { _id: 2, type: "motorcycle", specs: { doors: 0, wheels: 2 } },
        { _id: 3, type: "jet ski" }
    ]
)

db.vehicles.aggregate([{
    $addFields: {
        "specs.fuelType": "unleaded"
    }
}])

db.vehicles.aggregate([{
    $addFields: {
        "_id": "$type"
    }
}]);