"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const quizSchemaMongo_1 = require("../../Models/quizSchemaMongo");
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
                nom: req.session.nom
            };
            // vérifier si l'utilisateur est connécte
            if (data.nom) {
                res.status(http_status_codes_1.StatusCodes.OK).render('listeJeux', data);
            }
            else {
                // redirection pour qu'il puisse s'inscire
                res.redirect('/home/signup');
            }
        });
        // POST '/home/addscore' route pour ajout du scrore d'un utilisateur
        this.router.post('/home/addscore', (req, res) => {
            // if (!req.session.nom){
            //     return ;
            // }
            // idQuiz et Score
            const { idQuiz: idQuiz, score: score } = req.body;
            // nomUser 
            const nom = "Tsitohaina";
            const quiz = {
                "idQuiz": idQuiz,
                "nom": nom,
                "score": score
            };
            // affiche score
            console.log({
                "idQuiz": idQuiz,
                "nom": nom,
                "score": score
            });
            const addScore = async (I) => {
                try {
                    const quiz = new quizSchemaMongo_1.Quiz(I);
                    await quiz.save();
                    res.status(http_status_codes_1.StatusCodes.CREATED).json({
                        status: http_status_codes_1.ReasonPhrases.CREATED,
                        message: "quiz fait ajouter",
                        quiz: {
                            idQuiz: idQuiz,
                            nom: nom,
                            score: score
                        }
                    });
                }
                catch (error) {
                    console.log(`misy erreur :`, error);
                }
            };
            addScore(quiz);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = JeuxRoutes;
