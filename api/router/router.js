const express = require("express");
const router = express.Router();
const giveaway = require("../models/giveawayModal.js");
const Giveaway = require("../controller/Giveaways");

router.get("/", async (req, res) => {
  const data = await giveaway.findOne();
  res.json(data);
});

router.post("/getAllGiveawayDetails", async (req, res) => {
  const data = await giveaway.find({
    uid: `${req.body.uid}`,
  });
  res.json(data);
});

router.post("/getGiveawayDetails", async (req, res) => {
  const data = await giveaway.findOne({
    id: `${req.body.id}`,
  });
  res.json(data);
});

router.post("/giveaway/delete", async (req, res) => {
  const data = await giveaway.deleteOne({
    id: `${req.body.id}`,
  });
  res.json(data);
});

router.post("/giveaway/edit", async (req, res) => {
  console.log(req.body.giveaway_name)
  const data = await giveaway.findOneAndUpdate({
    id: req.body.id
  }, {
    giveaway_name: req.body.giveaway_name,
    description: req.body.description,
    rules: req.body.rules,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    category: req.body.category,
    steps: req.body.steps,
    prizes: req.body.prizes,
    image: req.body.image,
  });
  
  console.log(data)
  res.json(data);
});

router.post("/giveaway/create", Giveaway.giveaway);

module.exports = router;
