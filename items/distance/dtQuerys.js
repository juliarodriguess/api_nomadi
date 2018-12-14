const Distance = require('./distance');
const distance = require ('google-distance-matrix')

const searchByOriginDestiny = (req, res, next) => {
    const urlParameterOrigin = req.body.origin;
    const urlParameterDestiny = req.body.destiny;
    // Find the objet by name
    // var origins = ['Av. Paulista - Bela Vista, São Paulo - SP'];
    // var destinations = ['Alameda Barão de Limeira - Campos Elíseos, São Paulo - SP'];
    var origins = req.body.origin;
    var destinations = req.body.destiny;

    distance.key('AIzaSyB6CHNi5g0HT7IvXI8Etr22du8NzkPX3h0');
    distance.units('metric');

    distance.matrix([origins], [destinations], function (err, distances) {
        if (err) {
            return handleError(err);
        }
        if (!distances) {
            return handleError(err);
        }
        if (distances.status == 'OK') {
            for (var i = 0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                        return res.json(distance);
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                        return handleError(err);
                    }
                }
            }
        }
    });
    // Distance.find((err, distance) => {
    //     if (err) {
    //         return handleError(err);
    //     } else {
    //         res.json(distance);
    //     }
    // });
};

module.exports = {
    searchByOriginDestiny
}