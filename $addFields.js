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

// Add fields in array 

db.scores.insertMany([
    { _id: 1, student: "Maya", homework: [10, 5, 10], quiz: [10, 8], extraCredit: 0 },
    { _id: 2, student: "Ryan", homework: [5, 6, 5], quiz: [8, 8], extraCredit: 8 }
])

db.scores.aggregate([
    {
        $match: {
            "_id": 1
        }
    },
    {
        $addFields: {
            "homework": {
                $concatArrays: ["$homework", [1,2] ]
            }
        }
    }
])


























