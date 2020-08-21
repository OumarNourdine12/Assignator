const MongoCLient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser"); // use to parse the body in Json Format

const url = "mongodb://localhost:27017";
const app = express();


const main = async () => {
    /* MONGO conection and DataBase création*/
    const client = await MongoCLient.connect(url, { useUnifiedTopology: true });
    const dataBase = client.db("Assign");
}