const playersRoutes = (app, fs, Joi) => {
    // variables
    const dataPath = './data/players.json';
    
    // read
    app.get('/api/players', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) { throw err; }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = playersRoutes;