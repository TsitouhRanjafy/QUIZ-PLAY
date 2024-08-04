"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const userSchemaMongo_1 = require("../../Models/userSchemaMongo");
class ClassementRoute {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/classement'
        this.router.get('/home/classement', async (req, res) => {
            // pour contenir tout l'utilisateur
            let AllUsers = null;
            try {
                AllUsers = await userSchemaMongo_1.User.find({}, { _v: 0 });
            }
            catch (error) {
                console.log(error);
            }
            // retoure immediate s'il n'y a pas d'utilisateur
            if (!AllUsers) {
                return;
            }
            console.log(AllUsers.length);
            // affecter tout l'utilisateur dans notre data pour qu'on puisse l'afficher
            const data = {
                Users: AllUsers,
                Count: AllUsers.length
            };
            res.status(http_status_codes_1.StatusCodes.OK).render('classement', data);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ClassementRoute;
