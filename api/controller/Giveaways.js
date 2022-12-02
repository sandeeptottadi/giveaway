const mongoose = require("mongoose");
const Comm = require("../models/commentModel");
const giveaway = require("../models/giveawayModal");
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

exports.giveaway = async (req, res) => {
  try {
    console.log("req", req.body);
    // const comment = [req.body.comment];
    // const postid = req.body.postid;
    // const commentid = req.body.commentid;
    // console.log(comment, postid);
    // const user = await User.findOne().exec();
    // console.log("user", user);

    const giveawayCollection = new giveaway({
      id: uuidv4(),
      ...req.body,
    });

    giveawayCollection.save(function (err, data) {
      if (err) {
        return res.status(400).send(err);
      }
      console.log(data);
      return res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
};
