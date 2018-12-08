// const cors = require("cors")
// const express = require('express');
const express = require('express');
const router = express.Router();

router.use(express.json());

// const app = express();

// app.use(express.json());
// app.use(cors())

router.get('/', function (req, res) {
  res.send('Hello World!');
});



router.post('/lead', function (req, res) {
    res.send({data: 1});
});

// GET /lead?a=1&b=2

// req.query
// req.body
// req.headers

// res.headers
// res.send
        

//iniciar o servidor
// app.listen(4000, function () {
//             console.log('Example app listening on port 4000!');
//         });