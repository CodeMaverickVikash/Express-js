// insert data into mongodb

use vikash

// for inerting one documents/object/row into items collections/column
db.items.insertOne({name: "sumsung 20s", price: 22000, rating: 4.3})

// for inerting many object into items collections
db.items.insertMany([{name: "sumsung 20s", price: 22000, rating: 4.3}, {name: "nokia y1", price: 20000, rating: 3.3}])

// how to see documents
db.items.find()