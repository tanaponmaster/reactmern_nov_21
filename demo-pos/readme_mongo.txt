https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
brew tap mongodb/brew
brew install mongodb-community@5.0

brew services start mongodb-community@5.0
brew services stop mongodb-community@5.0


mongo vs mongod
cls
show dbs
use [dbname]
show collections
db.[collections].find()

// create database
db.courses.insert({title:"angular", price: 100})
db.courses.findOneAndUpdate({title:"angular"}, {$set: {price: 5} })

https://www.mongodb.com/try/download/database-tools
mongodump -d [db_name] -o [folder to save]
 mongorestore -d [db_name] [folder of dump db]