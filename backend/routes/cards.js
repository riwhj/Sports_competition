const router = require("express").Router();
let Cards = require("../models/cards.model");

router.route("/profile").get((req, res) => {
  Cards.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/createlistex").post((req, res) => {
  const cetagory = req.body.cetagory;
  const name = req.body.name;
  const image = req.body.image;
  const place = req.body.place;
  const organizer = req.body.organizer;
  const date = Date.parse(req.body.date);
  const detail = req.body.detail;
  const fullname = req.body.fullname;
  const sex = req.body.sex;
  const phone = req.body.phone;
  const email = req.body.email;
  const born = req.body.born;

  const newCards = new Cards({
    cetagory,
    name,
    image,
    place,
    organizer,
    date,
    detail,
    fullname,
    sex,
    phone,
    email,
    born,
  });

  newCards
    .save()
    .then(() => res.json("add card!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/search/:id").get((req, res) => {
  Cards.find({
    $or: [
      { name: new RegExp(req.params.id, "i") },
      { cetagory: new RegExp(req.params.id, "i") },
    ],
  })
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
