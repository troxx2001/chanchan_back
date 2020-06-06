const { v4: uuidv4 } = require('uuid');
const moment = require('moment')
const mongoose = require('mongoose')
const { Schema } = mongoose

const currentDate = new Date();
const PostSchema = new Schema({
    id: { default: uuidv4(), type: String },
    creator_id: { type: String, required: true },
    image_id: { type: String },
    video_id: { type: String },
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: [],
    lat: { type: String, required: true },
    long: { type: String, required: true },
    active: { default: true, type: Boolean, required: true },
    visibility_time: {
        type: String,
        default: moment(currentDate).add(30, 'days').format()
    },
    date_created: {
        type: String,
        default: moment(currentDate).format()
    },
    category: [],
    value: { type: Number, required: true }
})

module.exports = mongoose.model('Publicacion', PostSchema)