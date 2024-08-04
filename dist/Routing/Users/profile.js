"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
class Profile {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/signup/'
        this.router.get('/home/profile', (req, res) => {
            const data = {
                nom: req.session.nom,
                motDePasse: req.session.motDePasse
            };
            if (!req.session.nom) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    status: http_status_codes_1.ReasonPhrases.BAD_REQUEST,
                    message: "inscriver vous d'abord"
                });
                return;
            }
            res.status(http_status_codes_1.StatusCodes.OK).render('profil', data);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = Profile;
