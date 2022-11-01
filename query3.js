db.inventory5.insertMany([
   { _id: 1, item: null },
   { _id: 2 }
])

db.inventory5.find({})
   .projection({})
   .sort({_id:-1})
   .limit(100)
   
db.inventory5.find({item: null})
   .projection({})
   .sort({_id:-1})
   .limit(100)
   
   
db.inventory5.find( { item : { $type: 10 } } )
   
   
db.inventory5.find( { item : { $exists: false } } )
