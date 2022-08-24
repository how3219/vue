const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sensorSchema = new Schema({
    cnt: Number,
    id: Number,
    time: Date,
    temp: Number,
    mv: Number,
    humi: Number,
});

module.exports = mongoose.model('Sensor', sensorSchema);
