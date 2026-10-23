const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const mongoURL = "mongodb://delta_admin:delta_password@localhost:27017";
const client = new MongoClient(mongoURL);

app.get("/getUsers", async (req, res) => {
    await client.connect();
    console.log("Connected successfully to server!");
    const db = client.db("my-sample-db");
    const data = await db.collection("users").find({}).toArray();
    res.send(data);
});

app.post("/adduser", async (req, res) => {
    const userBody = req.body;
    await client.connect();
    console.log("Connected successfully to server!");

    const db = client.db("my-sample-db");
    const data = await db.collection("users").insertOne(userBody);
    console.log("Data inserted in DB");
    console.log(userBody);
    client.close();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});