var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Listening on port %d', app.get('port'));
});
