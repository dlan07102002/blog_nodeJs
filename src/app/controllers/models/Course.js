const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;
const Course = new Schema ({
    name: {type: String, required: true,},
    description: {type: String},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    slug: { type: String, slug: "name", unique: true }
    
}, {timestamps: true});

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});

module.exports = mongoose.model('Course', Course);