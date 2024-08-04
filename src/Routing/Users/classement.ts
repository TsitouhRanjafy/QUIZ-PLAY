import express, { Router,Request,Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IUser, User } from "../../Models/userSchemaMongo";

export default class ClassementRoute{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){

        // GET '/home/classement'
        this.router.get('/home/classement',async  (req : Request,res : Response) =>{

            // pour contenir tout l'utilisateur
            let AllUsers = null;
            try {
                AllUsers = await User.find({},{_v : 0});

            } catch (error) {
                console.log(error);
            }
            // retoure immediate s'il n'y a pas d'utilisateur
            if (!AllUsers){
                return
            }

            // affecter tout l'utilisateur dans notre data pour qu'on puisse l'afficher
            const data = {
                Users : AllUsers,
                Count : AllUsers.length
            }
            res.status(StatusCodes.OK).render('classement',data)
        })
    }
    
    public getRouter() : Router {
        return this.router 
    }
}
