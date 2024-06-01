// models/feedback.js

const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    feedbackText: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
});

const FeedbackModel = mongoose.model("Feedback", feedbackSchema);

module.exports = FeedbackModel;
