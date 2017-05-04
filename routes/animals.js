var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


/* GET animals listing. */
router.get('/', (req, res, next) => {
  knex('animals')
  .then((allAnimals) => {
    res.render('animals', {
      allAnimals
    })
  })
});

/* GET available listing. */
router.get('/available', (req, res)=>{
  console.log('AVAILABLE');
  knex('animals')
  .where('is_adopted', false)
  .then((available)=>{
    res.render('animals/available', {
      available
    })
  })
})

/* generate NEW page. */
router.get('/new', (req, res) => {
  console.log('NEW');
  res.render('animals/new')
})

/* generate EDIT page. */
router.get('/edit/:id', (req, res) => {
  console.log('EDIT');
  id = req.params.id;
  knex('animals')
  .where('id', id)
  .first()
  .then((animal) => {
    res.render('animals/edit', {
      animal
    })
  })
})

/* SHOW one animal. */
router.get('/show/:id', (req, res, next) => {
  console.log('ID');
  id = req.params.id;
  knex('animals')
  .where('id', id)
  .first()
  .then((animal) => {
    res.render('animals/show', {
      animal
    })
  })
})

/* CREATE one */
router.post('/', (req, res, next) => {
  var newAnimal = {
    img_url: req.body.img_url,
    name: req.body.name,
    kind: req.body.kind,
    age: req.body.age,
    description: req.body.description,
    is_adopted: req.body.is_adopted
  };
  knex('animals')
  .insert(newAnimal, '*')
  .then((newAnimal) => {
    let id = newAnimal[0].id;
    res.redirect(`/animals/show/${id}`)
  })
})

/* EDIT one */
router.put('/:id', (req, res)=>{
  console.log('EDITTING');
  id = req.params.id;
  var newAnimal = {
    img_url: req.body.img_url,
    name: req.body.name,
    kind: req.body.kind,
    age: req.body.age,
    description: req.body.description,
    is_adopted: req.body.is_adopted
  };
  knex('animals')
  .update(newAnimal, '*')
  .where('id', id)
  .then((newAnimal) => {
    let id = newAnimal[0].id;
    res.redirect(`/animals/show/${id}`)
  })
});

/* DELETE */
router.delete('/:id', (req, res, next) => {
  id = req.params.id;
  knex('animals')
  .del()
  .where('id', id)
  .then(() => {
    res.redirect('/animals')
  })
})

module.exports = router;
