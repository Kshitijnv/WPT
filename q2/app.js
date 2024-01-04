const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

// Sample data storage using arrays
let events = [];

app.use(bodyParser.json());

// API to add a new event
app.post("/new", (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res
    .status(201)
    .json({ message: "Event added successfully", event: newEvent });
});

// API to list all events
app.get("/list", (req, res) => {
  res.status(200).json({ events });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
