// Create a new collection.
use('shopingCart')
db.createCollection('demoXYZ')

// Removes a collection from the database.
use('shopingCart')
db.demoXYZ.drop()

// Inserts a single document into a collection.
use('shopingCart')
db.brands.insertOne(
    {
        "name":"sohag shah",
        "designation":"Manager",
        "Age":25,
        "city":"Dhaka"
    }
)

// Delete/remove a single document from the collection.
use('shopingCart')
db.brands.deleteOne(
    {
        "_id":ObjectId("6415496295449085435i94395")
    }
)