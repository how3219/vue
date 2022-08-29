const _from = (date) => ('00' + date).slice(-2);
const comments = require('./comments');
module.exports = () => {
    return {
        comments,
        getDate() {
            const d = new Date();
            return `${d.getFullYear()}-${_from(d.getMonth() + 1)}.${_from(d.getDate())} ${_from(d.getHours())}:${_from(
                d.getMinutes(),
            )}:${_from(d.getSeconds())}`;
        },
        wrapE(f) {
            return (req, res, next) => {
                f(req, res, next).catch(next);
            };
        },
    };
};
