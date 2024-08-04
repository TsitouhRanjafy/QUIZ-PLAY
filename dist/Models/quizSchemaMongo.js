"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const QuizSchema = new mongoose_1.Schema({
    idQuiz: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true,
        unique: false
    },
    score: {
        type: Number,
        required: true,
        unique: false
    }
});
exports.Quiz = (0, mongoose_1.model)('quiz', QuizSchema);
