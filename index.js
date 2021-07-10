
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', function (req, res) {
  res.send('GET request to the homepage')

app.get('/users/1', function (req, res) {
  res.send('GET request to the homepage')

app.post('/users', function (req, res) {
  res.send('POST request to the homepage')

app.post('/users/1', function (req, res) {
  res.send('POST request to the homepage')

app.delete('/users/1', function (req, res) {
  res.send('Got a DELETE request at /user/1')



/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))