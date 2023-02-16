const express =     require("express");
const bodyParser =  require("body-parser");
const config =      require("config");

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'))
    app.use(bodyParser.json())
    app.set('view engine', 'pug')

    require('../routes/index')(app);
    require('../routes/callback')(app);

    return app;
};