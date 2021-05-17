const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardsSchema = new Schema(
  {
    cetagory: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    place: { type: String, required: true },
    organizer: { type: String, required: true },
    date: { type: Date, required: true },
    detail: { type: String, required: true },
    fullname: { type: String, required: true },
    sex: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    born: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Cards = mongoose.model("Cards", cardsSchema);

module.exports = Cards;
