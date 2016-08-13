'use strict'

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  WmsMap = mongoose.model('wmsMap');

module.exports = function(WmsMap) {

  return {
    /**
     * Find article by id
     */
    get: function(req, res, next, id) {
      WmsMap.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load WmsMap ' + id));
        req.article = article;
        next();
      });
    },
    /**
     * Create an article
     */
    create: function(req, res) {
      var wmsMap = new WmsMap(req.body);
      wmsMap.title = req.title;

      wmsMap.save(function(err) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot save the WmsMap'
          });
        }



        res.json(WmsMap);
      });
    }

  };
}
