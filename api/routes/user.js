const express = require('express');
const cryptojs = require('crypto-js');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/user');

const router = express.Router();

router.post('/login/', async(req, res) => {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email });

    if (!user) {
        res.json({ message: 'User was not found', success: false });
        return;
    }
    const hash = cryptojs.AES.decrypt(user.password, '123123').toString(cryptojs.enc.Utf8);
    const success = hash === body.password;
    if (!success)
        res.json({ success, message: 'Wrong e-mail address or password', mine: hash, yours: body.password });
    else
        res.json({ success, id: user._id.toString() });
});

router.post('/create/', async (req, res) => {
    const body = req.body;
    const model = {};
    model.password = cryptojs.AES.encrypt(body.password, '123123').toString();
    model.userid = uuidv4();
    model.email = body.email;
    const user = new UserModel(model);
    user.save().then(user => {
        console.log({user});
        res.json({ success: true });
    }).catch(err => {
        console.log({err, body});
        res.json({ success: false });

    })
});

module.exports = router;