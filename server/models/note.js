// require mongoose
var mongoose = require('mongoose');
// create the schema
var NoteSchema = new mongoose.Schema({
 content: { type: String, required: true, minlength: 3},
 created_at: Date
})
var Note = mongoose.model('Note', NoteSchema); // We are setting this Schema in our Models as 'User'