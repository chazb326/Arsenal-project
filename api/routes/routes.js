// routes
const resultsRoutes = require('./results');
const playersRoutes = require('./players');

const appRouter = (app, fs, Joi) => {
    //default route
    app.get('/', (req, res) => {
        res.send("Charlie's Arsenal API");
    });

    // other routes
    resultsRoutes(app, fs);
    playersRoutes(app, fs);
};

module.exports = appRouter;