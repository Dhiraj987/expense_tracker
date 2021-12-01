import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This works, from income");
});

export default router;
