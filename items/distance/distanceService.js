const distance = require ('google-distance-matrix')
const express = require('express');
const router = express.Router();
const Distance = require('../distance/distance')

//criar o Rest API e adicionar o CRUD ao Mongo's Schema
Distance.methods(['get', 'post', 'put', 'delete'])

router.use(express.json());

router.get('/api/distance', (req, res) => {
    var origins = db.collection('distances').find({'_id':'5c0d74a921a19d56b1415be8'});
    var destinations = db.collection('distances').find({'_id':'5c0d74a921a19d56b1415be8'});
    distance.key('AIzaSyB6CHNi5g0HT7IvXI8Etr22du8NzkPX3h0');
    distance.units('metric');
    
    distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if(!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
            for (var i=0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                    }
                }
            }
        }
    });
});

module.exports = Distance
module.exports = router;

