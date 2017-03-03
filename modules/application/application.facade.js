const Model = require('../base.facade');
const applicationSchema  = require('./application.schema');

class ApplicationModel extends Model {}

module.exports = new ApplicationModel(applicationSchema);
