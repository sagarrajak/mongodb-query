db.students.insertMany( [
   { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },
   { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },
   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") }
] )

db.students.find({})
   .projection({})
   .sort({_id:-1})
   .limit(100)
   
   

db.students.updateOne( { _id: 3 }, [ { $set: { "test3": 98, modified: "$$NOW"} } ] )

db.students.find({}).pretty()
   .projection({})
   .sort({_id:-1})
   .limit(100)
   
 
db.students2.insertMany( [
   { "_id" : 1, quiz1: 8, test2: 100, quiz2: 9, modified: new Date("01/05/2020") },
   { "_id" : 2, quiz2: 5, test1: 80, test2: 89, modified: new Date("01/05/2020") },
] )

db.students2.find({})
   .projection({})
   .sort({_id:-1})
   .limit(100)
   .pretty()