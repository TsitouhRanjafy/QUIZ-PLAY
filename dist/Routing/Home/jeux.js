"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
class JeuxRoutes {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/listeJeux' 
        this.router.get('/home/listeJeux', (req, res) => {
            const data = {
                test: "test"
            };
            res.status(http_status_codes_1.StatusCodes.OK).render('test', data);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = JeuxRoutes;
