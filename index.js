var express = require("express");

var app = express();

var PythonShell = require('python-shell');
 
PythonShell.run('script.py', function (err, results) {
  if (err) throw err;
  console.log('finished');
  console.log(results);
});

app.listen(3000);