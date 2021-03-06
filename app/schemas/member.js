var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var MemberSchema = new Schema({
  name: {
    type: String,
  },
  num: {
    type: String,
  },
  tel: {
    type: String,
  },
  dept: {
    type: String,
  },
  status:{
    type: String,
    default: 'Success'
  },
  filename:{
    type: String,
  },
  type: {
    type: String,
  },
  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    },
    updateAt:{
      type:Date,
      default:Date.now()
    }
  }
});
MemberSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
})
MemberSchema.statics = {
  fetch:function(cb){
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById:function(id, cb){
    return this
      .findOne({
        _id:id
      })
      .exec(cb);
  }
}
module.exports = MemberSchema;