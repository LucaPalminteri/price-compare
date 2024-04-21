import { Router } from "express";
import { main } from "../main.js";
const router = Router();

router.post("/test", async (req, res) => {
  let { search } = req.body;

  console.log(search);
  const data = await main(search);
  res.json(data);

  console.log("search:", search);
});

export default router;
