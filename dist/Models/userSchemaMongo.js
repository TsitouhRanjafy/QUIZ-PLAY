"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    motDePasse: {
        type: String,
        required: true
    },
    scrore: {
        type: Number,
        required: false
    }
});
exports.User = (0, mongoose_1.model)('user', UserSchema);
