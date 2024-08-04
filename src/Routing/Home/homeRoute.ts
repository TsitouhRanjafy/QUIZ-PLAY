import express, { Router,Request,Response } from "express";
import { StatusCodes } from "http-status-codes";


export default class HomeRoutes{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){
        // GET '/home/'
        this.router.get('/home',(req : Request,res : Response) =>{
            // pour dire si l'utilisateur est inscrit ou non
            // get session             
            const data = {
                nom : req.session.nom
            }
            res.status(StatusCodes.OK).render('index',data);
        })

        // GET '/home/deconnexion'
        this.router.get('/home/deconnexion',(req : Request,res : Response) =>{

            // suprimer session
            req.session.nom = null
            req.session.motDePasse = null
            
            res.redirect('/home');
        })
    }
    
    public getRouter() : Router {
        return this.router
    }
    
}
