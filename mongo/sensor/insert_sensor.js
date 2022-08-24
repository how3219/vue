const mongoose = require('mongoose');
const USER = 'dabin';
const PWD = 'dabin12010';
const HOST = 'localhost:27017';
const DB = 'sensor';
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;
const csvFilePath = '../data/sensor.csv';
const csv = require('csvtojson');
const path = require('path');
const _path = path.join(__dirname, csvFilePath);
const Sensor = require('../models/sensor.js');

mongoose
    .connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

const create = async () => {
    const sensorList = await csv().fromFile(_path);
    console.log(sensorList);
    Sensor.insertMany(sensorList, (error, docs) => {
        console.log('insert succesful');
    });
};

create();
