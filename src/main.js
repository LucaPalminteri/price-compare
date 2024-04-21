import express from "express";
import indexRoutes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
