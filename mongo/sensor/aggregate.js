const mongoose = require('mongoose');
const USER = 'dabin';
const PWD = 'dabin12010';
const HOST = 'localhost:27017';
const DB = 'sensor';
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

mongoose
    .connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));
const Sensor = require('../models/sensor');
const main = async () => {
    const test1 = await Sensor.aggregate([
        { $match: { temp: { $gte: 26 } } },
        { $group: { _id: '$id', total: { $sum: '$temp' } } },
    ]);
    console.log(test1);
    const test2 = await Sensor.aggregate([
        { $match: { $or: [{ temp: { $gte: 26, $lte: 27 } }, { humi: { $gte: 80 } }] } },
        { $group: { _id: '$id', count: { $sum: 1 } } },
        { $project: { _id: 0, count: 1 } },
    ]);
    console.log(test2);
    const test3 = await Sensor.aggregate([
        { $match: { $and: [{ temp: { $eq: 26.2 } }, { humi: { $eq: 85.7 } }] } },
        { $sort: { temp: 1 } },
        { $limit: 5 },
        { $project: { _id: 0, temp: 1, time: 1, min: { $minute: '$time' } } },
        { $match: { min: { $eq: 1 } } },
    ]);
    console.log(test3);
};
