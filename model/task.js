var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskModel = new Schema({
    title: {
        type: String
    },
    total_time: {
        type: String,
        default: "00:00:00"
    },
    is_status: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Number,
    },
    updated_at: {
        type: String,
        default: Date.now()
    }
});

var Task = mongoose.model('Task', TaskModel);

module.exports = {
    Task,
};
