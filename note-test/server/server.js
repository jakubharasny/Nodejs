const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Todo App v1.0.0"
  });
});

app.get('/users', (req,res) => {
  res.send({
    users:[{
      Name:"Jake",
      Age:32,
      Location:"London"
      }, {
      Name: "Bake", 
      Age: 10,
      Location: "Bangladesh"
      }, {
      Name: "Cake",
      Age: 60,
      Location: "Zimbabwe"
      }
  ]})
}
  )
app.listen(3000);

module.exports.app = app;