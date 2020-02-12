const sendMes = require('./app/utils/sendMes');

module.exports = app => {
    app.sendMes = sendMes;
};
