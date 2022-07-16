const express = require('express');
const FiddleModel = require('../models/fiddle');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/:id', async(req, res) => {
    const fiddles = await FiddleModel.findOne({id: req.params.id});
    res.json(fiddles);
});

router.get('/user/:userid', async (req, res) => {
    const fiddles = await FiddleModdel.find({ userid: req.params.userid });
    res.json(fiddles);
});

router.get('', async(req, res) => {
    const fiddles = await FiddleModel.find();
    res.json(fiddles);
});

router.post('/create/', async(req, res) => {
    const model = req.body;
    model.id = uuidv4();
    const fiddle = new FiddleModel(model);

    await FiddleModel.create(fiddle);
    res.json({ success: true })
});

router.put('/update/', async(req, res) => {
    const model = req.body;
    const fiddle = new FiddleModel(model);

    await FiddleModel.updateOne({ id: fiddle.id }, fiddle)
    res.json({ success: true })
});

router.delete('/remove/:id', async (req, res) => {
    await FiddleModel.deleteOne({ id: req.params.id })
    res.json({ success: true });
})

module.exports = router;