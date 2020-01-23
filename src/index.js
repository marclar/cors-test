/**
 * API index
 *
 * This file assigns all routes & handlers for the API
 *
 */

const bodyParser = require('body-parser');
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(bodyParser.json({strict: false}));

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': [
    'Content-Type',
    'X-Amz-Date,Authorization',
    'X-Amz-Security-Token',
    'X-Api-Key'
  ].join(',')
};

// ADD CORS HEADERS
app.use((req, res, next) => {
  res.set(CORS_HEADERS);
  next();
});

// THIS ROUTE WORKS
app.all('/', (req, res) => {
  console.log(
    `APP ${req.method} /, headers:`,
    JSON.stringify(
      {
        req: req.headers,
        res: res.headers
      },
      null,
      2
    )
  );
  res.json({ok: true});
});

// THESE ROUTES DO NOT
const {usingObjectAssign, usingResSet} = require('./controllers/accounts');
app.all('/acct/obj-assign', usingObjectAssign);
app.all('/acct/res-set', usingResSet);

module.exports.handler = serverless(app);
