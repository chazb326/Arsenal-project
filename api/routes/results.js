const resultsRoutes = (app, fs, Joi) => {
    // variables
    const dataPath = './data/results.json';

    // read
    app.get('/api/results', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) { throw err; }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = resultsRoutes;