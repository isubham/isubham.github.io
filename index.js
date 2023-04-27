import express from 'express';

const config = {
    port: 1234
};

const app = express();

app.use(express.static('./'));

app.listen(config.port, (req, res) => {
    console.log(`server listening on port ${config.port}`);
});
