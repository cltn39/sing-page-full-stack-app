require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const key = process.env.API_KEY;

module.exports = {
  picOfTheDay: function (req, res) {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then((response) => res.json(response.data))
      .catch((err) => res.status(422).json(err));
  },
  findAllPost: function (req, res) {
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost).catch((err) => res.status(422).json(err));
    });
  },
  createNewPost: function (req, res) {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      create_at: req.body.created_at,
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch((err) => res.status(422).json(err));
  },
};
