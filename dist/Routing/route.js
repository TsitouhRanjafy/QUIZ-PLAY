"use strict";
// ____________________________________  GESTION DE ROUTE  ____________________________________ \\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeRoute_1 = __importDefault(require("./Home/homeRoute"));
const inscription_1 = __importDefault(require("./Users/inscription"));
const connexion_1 = __importDefault(require("./Users/connexion"));
const profile_1 = __importDefault(require("./Users/profile"));
const jeux_1 = __importDefault(require("./Jeux/jeux"));
class Route {
    rout;
    constructor(app) {
        this.rout = app;
    }
    initialisez() {
        // GET '/'
        this.rout.get('/', (req, res) => {
            res.redirect('/home');
        });
        // Gestion de route home
        const homeroute = new homeRoute_1.default;
        this.rout.use(homeroute.getRouter());
        // Gestion de route inscriptoin
        const inscriptionroute = new inscription_1.default;
        this.rout.use(inscriptionroute.getRouter());
        // Gestion de route connexion
        const connexionroute = new connexion_1.default;
        this.rout.use(connexionroute.getRouter());
        // Gestion de route profile
        const profileroute = new profile_1.default;
        this.rout.use(profileroute.getRouter());
        // Gestion de route Jeux
        const jeuxroute = new jeux_1.default;
        this.rout.use(jeuxroute.getRouter());
    }
}
exports.default = Route;
