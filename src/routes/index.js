import { Router } from "express";
import { main } from "../main.js";
const router = Router();

router.post("/", async (req, res) => {
  const startTime = performance.now();
  let { search } = req.body;

  console.log(search);
  const data = await main(search);

  const endTime = performance.now();
  const executionTime = (endTime - startTime) / 1000;

  res.json({
    status: 200,
    message: "Response ok!",
    executionTime: executionTime.toFixed(2) + "s",
    dataLenght: data.length,
    data,
  });

  console.log("search:", search);
});

export default router;
