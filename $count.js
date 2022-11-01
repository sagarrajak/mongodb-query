db.studentScores.insertMany([
    { "_id": 1, "subject": "History", "score": 88 },
    { "_id": 2, "subject": "History", "score": 92 },
    { "_id": 3, "subject": "History", "score": 97 },
    { "_id": 4, "subject": "History", "score": 71 },
    { "_id": 5, "subject": "History", "score": 79 },
    { "_id": 6, "subject": "History", "score": 83 }
])

// $count return number of documents remains in pipeline

db.studentScores.find({})
    .projection({})
    .sort({ _id: -1 })
    .limit(100)

db.studentScores.aggregate([{
    $match: {
        "score": { $gt: 79 }
    }
}, {
    $count: "passing_scores"
}]);