const router = require("express").Router();
let Cards = require("../models/cards.model");

router.route("/listex").post((req, res) => {
  
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
  const born = Date.parse(req.body.born);

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
module.exports = router;