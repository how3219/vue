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
const Photo = require('../models/photo.js');

// create

const create = async () => {
    const _data = {
        albunId: 12010,
        id: 12010,
        title: '테스트',
        url: 'test@naver.com',
        thumbnailUrl: 'https://via.placeholder.com/150/13454b',
    };
    const new_photo = new Photo(_data);
    const t = await new_photo.save();
    console.log('Create', t);
};

//Read
const read = async () => {
    const t = await Photo.findOne({
        title: { $eq: '테스트' },
        url: { $eq: 'test@naver.com' },
    }).lean();
    console.log('Read', t);
};
const read2 = async () => {
    const t = await Photo.findOne({
        $or: [{ title: { $eq: '테스트' } }, { url: { $eq: 'test@naver.com' } }],
    }).lean();
    console.log('Read', t);
};
//Update
// const update = async () => {
//     const t = await Photo.updateMany(
//         {
//             title: { $eq: '테스트' },
//         },
//         {
//             $set: {
//                 url: 'test@google.com',
//             },
//         },
//         {
//             upsert: true,
//             multi: true,
//             new: true,
//         },
//     ).lean();
//     console.log('update', t);
// };
// const update2 = async () => {
//     const t = await Photo.updateMany(
//         {
//             title: {
//                 $in: ['test', 'test1', 'test2', 'test3'],
//             },
//         },
//         {
//             $push: {
//                 something: {
//                     $each: [1, 2, 3],
//                 },
//             },
//         },
//         {
//             upsert: true,
//             multi: true,
//             new: true,
//         },
//     ).lean();
//     console.log('update', t);
// };
const update3 = async () => {
    const t = await Photo.updateMany(
        {
            title: {
                $in: ['test', 'test1', 'test2', 'test3'],
            },
        },
        {
            $setr: {
                something2: 1,
            },
            $addToSet: {
                something: {
                    $each: [1, 2, 3],
                },
            },
        },
        {
            upsert: true,
            multi: true,
            new: true,
        },
    );
    console.log('update', t);
};
const updateOnedata = async () => {
    const t = await Photo.updateOne(
        {
            title: {
                $eq: 'test',
            },
        },
        {
            $set: {
                url: 'test@google.com',
            },
        },
    ).lean();
    console.log('oneUpdate', t);
};
// create();
// read();
// read2();
// update3();
updateOnedata();
