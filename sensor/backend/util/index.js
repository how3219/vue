const csv = require('csvtojson');
const from = (date) => ('00' + date).slice(-2);
const _ = require('fxjs/Strict');

const setType = (data) => {
    for (const key in data) {
        if (key == 'time') data[key] = new Date(data[key]);
        else data[key] = Number(data[key]);
    }
    return data;
};

module.exports = () => {
    return {
        async readCSV(fimePath) {
            const ret = _.go(await csv().fromFile(fimePath), _.map(setType), _.takeAll);
            return ret;
        },
        getDate() {
            const d = new Date();
            return `${d.getFullYear()}-${from(d.getMonth() + 1)}.${from(d.getDate())} ${from(d.getHours())}:${from(
                d.getMinutes(),
            )}:${from(d.getSeconds())}`;
        },
    };
};
