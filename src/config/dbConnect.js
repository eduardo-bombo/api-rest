import mongoose from "mongoose";

// banco de dados local
mongoose.connect("mongodb://127.0.0.1:27017/alura-node")

let db = mongoose.connection;

export default db;