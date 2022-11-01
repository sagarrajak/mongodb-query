db.docs.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] );


db.docs.updateOne(
    { item: "mat"}, 
    {
        $set: {
            "size.h" : 30
        },   
    }
);

db.docs.find({
    item: "mat"
})
   .projection({})
   .sort({_id:-1})
   .limit(100)
   
  
 db.docs.updateMany({ qty: { $gt: 80 }},{$set:{ status: 'D'}})
 
 db.docs.find({qty: { $gt: 80}})
    .projection({})
    .sort({_id:-1})
    .limit(100)
    
db.docs.replaceOne({item: "paper"}, { item: "paper", qty: 100, size: { h: 8.5, w: 12, uom: "dc" }, status: "F" })

db.docs.findOne({item: "paper"})



