var express = require('express');
var requestIp = require('request-ip');
var log4js = require('log4js');
var geoip = require('geoip-lite');

var app = express();
     
const PORT = 9000;
const HOST = '0.0.0.0';
  
//Uzycie log4js w celu zapisywania do pliku
log4js.configure({
    appenders: { ip: { type: "file", filename: "ip.log" } },
    categories: { default: { appenders: ["ip"], level: "info" } }
});

var logger = log4js.getLogger('ip');

logger.info(`Serwer nasluchuje na porcie ${PORT}`)


app.get('/',function(request, response) {
    var clientIp = requestIp.getClientIp(request);
    var date = new Date();
    if(clientIp != "127.0.0.1"){
        var geoLookup = geoip.lookup(clientIp);
        date = date.toLocaleString("en-US", {timeZone: geoLookup.timezone});
    }
    logger.info(`Czas u klienta ${date}, z adresu IP ${clientIp}`);
    response.send(`Czas u klienta ${date}, z ${geoLookup.city} ${geoLookup.country}, z adresu IP ${clientIp}`);
});

app.listen(PORT, HOST);