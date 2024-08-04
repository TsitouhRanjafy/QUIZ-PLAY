"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
class HomeRoutes {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/'
        this.router.get('/home', (req, res) => {
            // pour dire si l'utilisateur est inscrit ou non
            // get session             
            const data = {
                nom: req.session.nom
            };
            res.status(http_status_codes_1.StatusCodes.OK).render('index', data);
        });
        // GET '/home/deconnexion'
        this.router.get('/home/deconnexion', (req, res) => {
            // suprimer session
            req.session.nom = null;
            req.session.motDePasse = null;
            res.redirect('/home');
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = HomeRoutes;
