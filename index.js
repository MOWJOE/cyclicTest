// const importData = require("./data.json");
// const express = require("express");
// import importData from "./data.json";
// app.use(bodyParser.json());

import express from "express";
// import bodyParser from "body-parser";

import { readFile } from "fs/promises";
const importData = JSON.parse(await readFile("./data.json"));

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
	console.log("Test");
	res.send("hello this is test");
});

app.get("/players", (req, res) => {
	res.send(importData);
});

app.listen(PORT, () => {
	console.log(`running on port: http://localhost:${PORT}`);
});
