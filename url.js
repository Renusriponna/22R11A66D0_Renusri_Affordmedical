const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Url = require("../models/Url");

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "Please provide a longUrl" });
  }

  const urlCode = shortid.generate();
  const shortUrl = `http://localhost:3000/${urlCode}`;

  try {
    let url = new Url({ longUrl, shortUrl, urlCode });
    await url.save();
    res.json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
