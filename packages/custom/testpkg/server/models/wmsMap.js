/*
 * This file defines a new schema for mongoose
 * */

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var wmsMap = new Schema({
  created: {type : Date, default : Date.now},
  title: {type: String, default: '', trim : true},
  location: {type: String, default: '', trim: true}
});

wmsMap.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).populate('user').exec(cb);
  }
};

mongoose.model('wmsMap', wmsMap);
