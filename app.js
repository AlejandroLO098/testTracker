const express = require("express");

const port = process.env.PORT || 5000;

const app = express();

//API Middlewares

app.use(express.json()); // this is to accept the data in json format
app.use(express.urlencoded()); //this  is basically to decode the data send through gtml form
app.use(express.static("./"));
//API Routes
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/formPost", (req, res) => {
  console.log(req, res); //the data we get is in the body
});

// this is basically to listen on port

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
