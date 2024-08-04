import express, { Router,Request,Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Quiz } from "../../Models/quizSchemaMongo";




interface IQuiz {
    idQuiz : string,
    nom : string,
    score : number
}


export default class JeuxRoutes{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){

        // GET '/home/listeJeux'
        this.router.get('/home/listeJeux',(req : Request,res : Response) =>{
            
            
            const data = {
                nom : req.session.nom
            }

            // vérifier si l'utilisateur est connécte
            if (data.nom){
                res.status(StatusCodes.OK).render('listeJeux',data);
            } else {
                // redirection pour qu'il puisse s'inscire
                res.redirect('/home/signup');
            }
        })

        // POST '/home/addscore' route pour ajout du scrore d'un utilisateur
        this.router.post('/home/addscore',(req : Request,res : Response) =>{
            
            // if (!req.session.nom){
            //     return ;
            // }

            // idQuiz et Score
            const { idQuiz : idQuiz , score : score } = req.body
            // nomUser 
            const nom = "Tsitohaina"

            const quiz : IQuiz = {
                "idQuiz" : idQuiz,
                "nom" : nom,
                "score" : score
            }

            // affiche score
            console.log({
                "idQuiz" : idQuiz,
                "nom" : nom,
                "score" : score
            }); 
            

            const addScore = async (I : IQuiz) =>{
                try{
                    const quiz = new Quiz(I);
                    await quiz.save();
                    res.status(StatusCodes.CREATED).json({
                        status : ReasonPhrases.CREATED,
                        message : "quiz fait ajouter",
                        quiz : {
                            idQuiz : idQuiz,
                            nom : nom,
                            score : score
                        }
                    })
                } catch (error) {
                    console.log(`misy erreur :`,error);
                }
            }
            addScore(quiz)

        })

    }
    
    public getRouter() : Router {
        return this.router
    }
    
}
