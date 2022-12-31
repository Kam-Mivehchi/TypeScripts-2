let express = require('express');
const { Prompt } = require('../models')
let Sequelize = require('sequelize');
let router = express.Router();

//data route for prompts
router.get('/typescript', async function (req, res) {
  const exam = await Prompt.findOne({
    where: { language_id: 1 },
    order: Sequelize.literal('RAND()'),
  }).then(function (examPrompt) {
    res.json(examPrompt)
  })
});

router.get('/javascript', async function (req, res) {
  const exam = await Prompt.findOne({
    where: { language_id: 2 },
    order: Sequelize.literal('RAND()'),
  }).then(function (examPrompt) {
    res.json(examPrompt)
  })
});

router.get('/html', async function (req, res) {
  const exam = await Prompt.findOne({
    where: { language_id: 3 },
    order: Sequelize.literal('RAND()'),
  }).then(function (examPrompt) {
    let test = res.json(examPrompt)
    console.log(test)
  })
});

router.get('/css', async function (req, res) {
  const exam = await Prompt.findOne({
    where: { language_id: 4 },
    order: Sequelize.literal('RAND()'),
  }).then(function (examPrompt) {
    res.json(examPrompt)
  })
});

router.get('/english', async function (req, res) {
  const exam = await Prompt.findOne({
    where: { language_id: 5 },
    order: Sequelize.literal('RAND()'),
  }).then(function (examPrompt) {
    console.log(res.json(examPrompt))
  })
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Export
module.exports = router;
