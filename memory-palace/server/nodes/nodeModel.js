const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const nodeSchema = new Schema({
  nodeNum: {type: Number},  
  locX: {type: String},
  locY: {type: String},
  dateDescription: {type: String},
  date: {type: Number},
  monthWord: {type: String},
  dayWord: {type: String},
  baseYearWord: {type: String},
  endYearWord: {type: String},
  monthImg: {type: String},  
  dayImg: {type: String},
  baseYearImg: {type: String},
  endYearImg: {type: String},
  monthImgArray: {type: String},  
  dayImgArray: {type: String},
  baseYearImgArray: {type: String},
  endYearImgArray: {type: String} 
  // idNum: {type: Number}
});
// may not need 'idNum' field, but could be useful if a node is deleted and
// therefore we want to rename 'nodeNum' field dynamically

module.exports = mongoose.model('Node', nodeSchema);
