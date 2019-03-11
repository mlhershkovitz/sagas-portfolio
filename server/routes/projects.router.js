const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/api/project', (req, res) => {
    const queryString = `SELECT * FROM "projects"`;
    pool.query(queryString)
      .then((result) => { 
        res.send(result.rows); 
    }).catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
      });
  });

  router.post('/api/project', (req, res) => {
    const newProject = req.body;
    const queryString = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
      newProject.name,
      newProject.description,
      newProject.thumbnail,
      newProject.website,
      newProject.github,
      newProject.date_completed,
      newProject.tag_id,
    ];
    pool.query(queryString, queryValues)
      .then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('Error completing project POST', err);
        res.sendStatus(500);
      });
  });

  router.delete('/api/project/:id', (req, res) => {
    const queryString = 'DELETE FROM "project" WHERE id=$1';
    console.log('query', req.query.id, 'params', req.params.id);
    pool.query(queryString, [Number(req.params.id)])
      .then(() => {
        res.sendStatus(200);
      }).catch((error) => {
        console.log('Error completing DELETE route', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;