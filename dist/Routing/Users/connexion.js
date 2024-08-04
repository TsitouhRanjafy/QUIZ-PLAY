"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userSchemaMongo_1 = require("../../Models/userSchemaMongo");
const path_1 = __importDefault(require("path"));
const http_status_codes_1 = require("http-status-codes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_yup_middleware_1 = require("express-yup-middleware");
const userSchemaValid_1 = require("../../Models/userSchemaValid");
class Connexion {
    router;
    constructor() {
        this.router = express_1.default.Router();
        this.initialisation();
    }
    initialisation() {
        // GET '/home/signup/'
        this.router.get('/home/signin/', (req, res) => {
            res.sendFile(path_1.default.join(__dirname, '../../../public/page/connexion.html'));
        });
        // POST '/home/signup/in'
        this.router.post('/home/signin/in', (0, express_yup_middleware_1.expressYupMiddleware)({
            schemaValidator: userSchemaValid_1.addUserSchemeValidator,
            expectedStatusCode: http_status_codes_1.StatusCodes.BAD_REQUEST
        }), async (req, res) => {
            try {
                // ** get donné depuis le body
                const { body: donne } = req;
                // ** Déstructurer les informations ;
                const { nom: nom, motDePasse } = donne;
                // ** Vérifiez si le (nom/User) existe dans la base de données ou non;
                const isUserExist = await userSchemaMongo_1.User.findOne({
                    nom: nom
                });
                // ** S’il n’y a pas d’utilisateur avec l’e-mail, nous envoyons que l’utilisateur est introuvable;
                // ** Si isUserExist à de valeur,l'email de l'utilisateur exist => l'utilisateur exist
                if (!isUserExist) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                        status: http_status_codes_1.ReasonPhrases.NOT_FOUND,
                        success: false,
                        message: "User not found",
                    });
                    return; // arrête
                }
                // ** Si l’utilisateur existe dans la base de données, nous vérifierons que le mot de passe est valide ou non ;
                // ** Comparez le mot de passe dans la base de données et le mot de passe dans le requete body
                // ** compare password avec async/await
                try {
                    // isPasswordMatched est true si mdp correct
                    let isPasswordMatched = await bcrypt_1.default.compare(motDePasse, isUserExist?.motDePasse);
                    if (!isPasswordMatched) {
                        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                            status: http_status_codes_1.ReasonPhrases.BAD_REQUEST,
                            success: false,
                            message: "wrong password",
                        });
                        return; // arrête
                    }
                }
                catch (error) {
                    console.log(error);
                }
                // ** Alors si le nom et mot de passe sont valid, create a token
                // ** C'est notre JWT Token
                const token = jsonwebtoken_1.default.sign({ _id: isUserExist?._id, motDePasse: isUserExist?.motDePasse }, "YOUR_SECRET", {
                    expiresIn: "1d",
                });
                // ** set le session par le nom et motDePasse
                req.session.nom = isUserExist.nom;
                req.session.motDePasse = donne.motDePasse;
                // ** envoyez le response
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    status: http_status_codes_1.ReasonPhrases.OK,
                    success: true,
                    message: "login success",
                    token: token,
                });
            }
            catch (error) {
                // Send the error message to the client
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    status: http_status_codes_1.ReasonPhrases.BAD_REQUEST,
                    message: error.message.toString(),
                });
            }
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = Connexion;
