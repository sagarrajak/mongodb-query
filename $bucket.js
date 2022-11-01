db.artists.insertMany([
    { "_id": 1, "last_name": "Bernard", "first_name": "Emil", "year_born": 1868, "year_died": 1941, "nationality": "France" },
    { "_id": 2, "last_name": "Rippl-Ronai", "first_name": "Joszef", "year_born": 1861, "year_died": 1927, "nationality": "Hungary" },
    { "_id": 3, "last_name": "Ostroumova", "first_name": "Anna", "year_born": 1871, "year_died": 1955, "nationality": "Russia" },
    { "_id": 4, "last_name": "Van Gogh", "first_name": "Vincent", "year_born": 1853, "year_died": 1890, "nationality": "Holland" },
    { "_id": 5, "last_name": "Maurer", "first_name": "Alfred", "year_born": 1868, "year_died": 1932, "nationality": "USA" },
    { "_id": 6, "last_name": "Munch", "first_name": "Edvard", "year_born": 1863, "year_died": 1944, "nationality": "Norway" },
    { "_id": 7, "last_name": "Redon", "first_name": "Odilon", "year_born": 1840, "year_died": 1916, "nationality": "France" },
    { "_id": 8, "last_name": "Diriks", "first_name": "Edvard", "year_born": 1855, "year_died": 1930, "nationality": "Norway" }
])


db.artists.aggregate([{
    $bucket: {
        groupBy: "$year_born",
        boundaries: [1840, 1850, 1860, 1870, 1880],
        default: "Other",
        output: {
            "count": { $sum: 1 },
            "titles": {
                $push: {
                    "name": {
                        $concat: ["$first_name", " ", "$last_name"]
                    },
                    "year_born": "$year_born"
                }
            }
        }
    }
}]);


// /* 1 */
// {
// 	"_id" : 1840,
// 	"count" : 1,
// 	"titles" : [
// 		{
// 			"name" : "Odilon Redon",
// 			"year_born" : 1840
// 		}
// 	]
// },

// /* 2 */
// {
// 	"_id" : 1850,
// 	"count" : 2,
// 	"titles" : [
// 		{
// 			"name" : "Vincent Van Gogh",
// 			"year_born" : 1853
// 		},
// 		{
// 			"name" : "Edvard Diriks",
// 			"year_born" : 1855
// 		}
// 	]
// },

// /* 3 */
// {
// 	"_id" : 1860,
// 	"count" : 4,
// 	"titles" : [
// 		{
// 			"name" : "Emil Bernard",
// 			"year_born" : 1868
// 		},
// 		{
// 			"name" : "Joszef Rippl-Ronai",
// 			"year_born" : 1861
// 		},
// 		{
// 			"name" : "Alfred Maurer",
// 			"year_born" : 1868
// 		},
// 		{
// 			"name" : "Edvard Munch",
// 			"year_born" : 1863
// 		}
// 	]
// },

// /* 4 */
// {
// 	"_id" : 1870,
// 	"count" : 1,
// 	"titles" : [
// 		{
// 			"name" : "Anna Ostroumova",
// 			"year_born" : 1871
// 		}
// 	]
// }


db.artists.aggregate([{
    $bucket: {
        groupBy: "$year_born",
        boundaries: [1840, 1850, 1860, 1870, 1880],
        default: "Other",
        output: {
            "count": { $sum: 1 },
            "titles": {
                $push: {
                    "name": {
                        $concat: ["$first_name", " ", "$last_name"]
                    },
                    "year_born": "$year_born"
                }
            }
        }
    }
}, {
    $match: {
        count: {$gt: 2}
    }    
}]);


