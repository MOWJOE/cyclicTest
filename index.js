// const importData = require("./data.json");
// const express = require("express");
// import importData from "./data.json";
// app.use(bodyParser.json());

import express from "express";
// import { readFile } from "fs/promises";
// const cors = require("cors");
import cors from "cors";
// import bodyParser from "body-parser";
const info = {
	name: "Lebron",
	team: "Lakers",
	pointsPerGame: 27,
};

// const importData = JSON.parse(await readFile("./data.json"));

const app = express();
app.use(cors());
const PORT = 5000;
app.get("/", (req, res) => {
	console.log("Test");
	res.send("hello this is test");
});

app.get("/players", (req, res) => {
	res.send(info);
});

app.listen(PORT, () => {
	console.log(`running on port: http://localhost:${PORT}`);
});
