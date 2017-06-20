var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports = {
    find_all: function(req,res) {
        Note.find({}).sort({_id:-1})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    create: function(req, res) {
        console.log('POST DATA', req.body);
        Note.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    }
}