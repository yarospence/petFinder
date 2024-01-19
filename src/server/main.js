import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/api/v1/pets", (req, res) => {
  res.send("Get all pets from datatbase");
});

app.get("/api/v1/pets/:name", (req, res) => {
  res.send("Get pet name");
});

app.get("/api/v1/pets/owner", (req, res) => {
  res.send("This is the pet's owner");
});


ViteExpress.listen(app, 3000, () =>
  console.log(" I'm listening on port 3000..."),
);
