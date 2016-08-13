Schema = mongoose.Schema;

var wmsMap = new Schema({
  created: {type : Date, default : Date.now},
  title: {type: String, default: '', trim : true},
  location: {type: String, default: '', trim : true},
  user: {type : Schema.ObjectId, ref : 'User'}
});

wmsMap.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).populate('user').exec(cb);
  }
};

mongoose.model('wmsMap', wmsMap);
