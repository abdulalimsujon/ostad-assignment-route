
var fs = require('fs');
var http = require('http');


var servar = http.createServer(function (req, res) {

    if (req.url == '/') {
        var data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    } else if (req.url == '/contract') {
        var data = fs.readFileSync('contract.html', 'utf8');
        res.end(data);

    } else if (req.url == '/about') {
        var data = fs.readFileSync('about.html', 'utf8');
        res.end(data);

    } else if (req.url == '/service') {
        var data = fs.readFileSync('service.html', 'utf8');
        res.end(data);

    }

})


servar.listen(5000);

console.log('server is running');