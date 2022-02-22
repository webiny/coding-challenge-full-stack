import express from "express";

const app = express();
const port = 3000;

app.post("/graphql", (req, res) => {
  res.send("Implement GraphQL endpoint!");
});

app.post("/upload", (req, res) => {
  res.send("Implement file upload endpoint!");
});

app.listen(port, () => {
  console.log(`File Manager API is now running on port ${port}!`);
});
