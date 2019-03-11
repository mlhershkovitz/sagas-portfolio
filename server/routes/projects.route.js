const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "projects"`;
    pool.query(queryString)
      .then((result) => { 
        res.send(result.rows); 
    }).catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
      });
  });

  router.post('/', (req, res) => {
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