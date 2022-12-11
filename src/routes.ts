import express from "express";
import core from "./core";
const router = express();
const PORT = process.env.PORT || 3000;

router.use(express.json());

router.get("/", function (req, res) {
  res.send("it works");
});

router.post("/*", core);

router.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

export default router;
