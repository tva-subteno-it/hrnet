import {Database} from "bun:sqlite"

const db = new Database("db.sqlite", {create: true})
// console.log(db.query("SELECT * FROM users").all())
// Create a table named "users"

let query = db.query("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT,lastName TEXT,startDate DATE, birthday DATE, department TEXT, street TEXT, city TEXT, state TEXT, zip INTEGER);");

query.run()
query.finalize()
// Insert a new user
query = db.prepare("INSERT INTO users (firstName, lastName, startDate, birthday, department, street, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);")
query.run("John", "Doe", "2020-01-01", "1990-01-01", "IT", "123 Main St", "Anytown", "NY", 12345)

db.close()