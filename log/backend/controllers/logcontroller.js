const Log = require('../models/log');

exports.save = (json) => {
    const new_log = new Log(json);
    return new_log.save();
};

exports.getResTimeLatest = async (url, num) => {
    let ret = await Log.find({
        url: {
            $eq: url,
        },
    })
        .sort({
            time: -1,
        })
        .select({
            _id: 0,
            'response-time': 1,
            time: 1,
        })
        .limit(num);

    ret.sort((a, b) => new Date(a.time) - new Date(b.time));
    return ret;
};
