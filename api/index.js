const express = require('express');
const cors = require('cors');
const env = require('./env.json');
const mongoose = require('mongoose');
const app = express();
const axios = require('axios').default;

const userRoute = require('./routes/user');
const fiddleRoute = require('./routes/fiddle');


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.get('/', (req, res) => {
    res.end('hello from server!');
});

mongoose.connect(env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {

}).catch(err => {
    console.log({ err });
})

app.use('/api/users', userRoute);
app.use('/api/fiddles', fiddleRoute);

app.use('/api/compile/', (req, res) => {
    const _req = req.body;
    _req['clientId'] = env.jdoodle_clientId;
    _req['clientSecret'] = env.jdoodle_clientSecret;

    const result = await axios.post(env.jdoodle_endpoint, _req)
    res.json(result);
})

app.listen(3000, () => {
    console.log('server is running at port 3000!');
});