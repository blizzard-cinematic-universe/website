import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("site/dist"));

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});