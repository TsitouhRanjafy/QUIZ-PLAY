import express, { Router,Request,Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export default class Profile{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){

        // GET '/home/profile'
        this.router.get('/home/profile', (req : Request,res : Response) =>{
            const data = {
                nom : req.session.nom,
                motDePasse : req.session.motDePasse
            }
            if (!req.session.nom){
                res.status(StatusCodes.BAD_REQUEST).json({
                    status : ReasonPhrases.BAD_REQUEST,
                    message : "inscriver vous d'abord"
                })
                return ;
            }
            res.status(StatusCodes.OK).render('profil',data);
        })
    }
    
    public getRouter() : Router {
        return this.router 
    }
}
