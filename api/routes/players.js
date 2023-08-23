const playersRoutes = (app, fs, Joi) => {
    // variables
    const dataPath = './data/players.json';
    
    // read
    app.get('/api/players', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) { throw new Error(err); }

            res.status(200).send(JSON.parse(data));
        });
    });

    app.get('/api/players/:id', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) { throw new Error(err); }

            const _data = JSON.parse(data);

            const itemId = parseInt(req.params.id);
            const item = _data.players.find(_item => _item.id === itemId);

            if(item) {
                res.status(200).send(item);   
            } else {
                res.status(404).json({ error: 'Player not found'});
            }
        });
    });
};

module.exports = playersRoutes;