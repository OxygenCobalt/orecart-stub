var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/routes/hardware/", function(req, res, next) {
  console.log("The /routes/hardware route was called");
  fs.readFile(__dirname + '/routes.bin', function(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.set('Content-Type', 'application/octet-stream');
      res.send(data);
    }
  });
});

// router.post("/vans/routeselect/:van_guid", function(req, res, next) {
//   console.log("The /vans/routeselect route was called");
//   console.log(req.body);
//   console.log("Van GUID:", req.params.van_guid);
//   // Convert the bytes to a string if needed
//   var bodyString = req.body.toString();
//   console.log("Body as string:", bodyString);
//   res.send("OK");
// });

// router.post("/vans/location/:van_guid", function(req, res, next) {
//   console.log("The /vans/location route was called");
//   console.log(req.body);
//   console.log("Van GUID:", req.params.van_guid);
//   // Convert the bytes to a string if needed
//   var bodyString = req.body.toString();
//   console.log("Body as string:", bodyString);
//   res.send("OK");
// });

module.exports = router;