const Item = require("../models/Item");

exports.getAllItems = async (req, res) => {
    let items = await Item.find().skip(0).limit(50);
    res.send(items);
}

exports.getChoosenPageItems = async (req, res, next) => {
    
    let { activePage, size, sort } = req.query;
  
    if (!activePage) {
        activePage = req.query.page;
    }
  
    if (!size) {
        size = 5;
    }
  
    const limit = parseInt(size);
  
    const item = await Item.find().sort(
        { votes: 1, _id: 1 }).skip(activePage * 5 - 5 + 1).limit(limit)
    res.send({
        activePage,
        size,
        Info: item,
    });
}


exports.addItems = async (req, res) => {
    const addItem = new Item({
		name: req.body.name
	})

    await addItem.save();
    res.send(addItem);
}

exports.changeItems = async (req, res) => {
    const updateItem = await Item.findOne({ _id: req.params.id });

	if (req.body.name) {
		updateItem.name = req.body.name;
	}
    if (req.body.checkTask) {
		updateItem.checkTask = req.body.checkTask;
	}

	await updateItem.save();
	res.send(updateItem);
}

exports.deleteItems = async (req, res) => {

    await Item.deleteOne({ _id: req.params.id });
    res.send('Got a DELETE request at /user');
}

