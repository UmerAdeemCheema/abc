var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var registeredinsuancePackageSchema= new Schema({
    registeredPackageId: {
        type: String,
        required:true
    },
    userId: {
        type: String,
        required:true
    },
    packageId: {
        type: String,
        required:true
    },
    packagename: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    picurl: {
        type: String,
        default:"",
    },
})

module.exports = mongoose.model('RegisteredInsuancePackage', registeredinsuancePackageSchema)