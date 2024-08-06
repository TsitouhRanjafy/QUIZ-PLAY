"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const path_1 = __importDefault(require("path"));
const express_yup_middleware_1 = require("express-yup-middleware");
const userSchemaValid_1 = require("../../Models/userSchemaValid");
const userSchemaMongo_1 = require("../../Models/userSchemaMongo");
const bcrypt_1 = __importDefault(require("bcrypt"));
class Inscription {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/signup/'
        this.router.get('/home/signup/', (req, res) => {
            if (req.session.nom)
                return;
            res.sendFile(path_1.default.join(__dirname, '../../../public/page/inscription.html'));
        });
        // POST '/home/signup/adduser'
        this.router.post('/home/signup/adduser', 
        // ** valider le request
        (0, express_yup_middleware_1.expressYupMiddleware)({
            schemaValidator: userSchemaValid_1.addUserSchemeValidator,
            expectedStatusCode: http_status_codes_1.StatusCodes.BAD_REQUEST
        }), (req, res) => {
            const { body: donne } = req;
            const enregistrement = async (IUser) => {
                try {
                    // ** vérifier si le nom est déjà utiliser
                    const isNameReadyExist = await userSchemaMongo_1.User.findOne({
                        nom: IUser.nom
                    });
                    // ** Ajoute d'une condition si l'utilisateur est déjà exist, envoyons une reponse c'est déjà utiliser ce nom
                    if (isNameReadyExist) {
                        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                            status: http_status_codes_1.StatusCodes.BAD_REQUEST,
                            succes: false,
                            message: "nom déjà utiliser",
                        });
                        return; // arrête
                    }
                    // ** si non,créer un nouveul utilisateur
                    // ** hasher le password en utilisant bcrypt
                    bcrypt_1.default.genSalt(10, (err, salt) => {
                        bcrypt_1.default.hash(IUser.motDePasse, salt, async function (err, hash) {
                            // Store hash in the database
                            // creation d'utilisateur
                            await userSchemaMongo_1.User.create({
                                nom: IUser.nom,
                                motDePasse: hash,
                                score: 0
                            });
                        });
                    });
                    // ** set session par nom et motDePasse
                    req.session.nom = IUser.nom;
                    req.session.motDePasse = IUser.motDePasse;
                    res.status(http_status_codes_1.StatusCodes.CREATED).send({
                        status: http_status_codes_1.ReasonPhrases.CREATED,
                        succes: true,
                        message: "user created successfully",
                        user: {
                            "nom": IUser.nom,
                            "motDePasse": IUser.motDePasse,
                            "score ": 0
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                        "status": http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
                        "message": "try to change the name"
                    });
                }
            };
            enregistrement(donne);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = Inscription;
