const express = require('express'),
app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const static = require('node-static');
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
    res.render("index");
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
  console.log('listening on 3000');
});

module.exports = app;
