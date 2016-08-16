/* This is a controller for handling the action from the routes
 *  enables the GET and POST
 *  In the POST case it creates a new object into the DB using the schema "wmsMap"
 * */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  WmsMap = mongoose.model('wmsMap'),
  fs = require('fs');


exports.get = function (req, res, next, id) {

  next();

};
/**
 * Create an article
 */

exports.create = function (req, res) {

  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
    console.log("Uploading: " + filename);
    fstream = fs.createWriteStream(__dirname + '/../../uploadedFiles/' + filename);
    file.pipe(fstream);
    fstream.on('close', function () {
      res.send('File Uploaded');
    });
  });

  /*This is is the DB insertion */
  /*
   console.log("Create: "+req.body)
   var wmsMap = new WmsMap();
   wmsMap.title = req.title;

   wmsMap.save(function(err) {
   if (err) {
   return res.status(500).json({
   error: 'Cannot save the WmsMap'
   });
   }

   });
   */
};


