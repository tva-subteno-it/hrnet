import {Database} from "bun:sqlite"

export default function read_table(){
    const db = new Database("db.sqlite", )
    return db.query("SELECT * FROM users").all()
}