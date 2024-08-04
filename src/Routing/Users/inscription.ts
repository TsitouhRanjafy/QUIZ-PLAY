import express, { Router,Request,Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import path from "path";
import { expressYupMiddleware } from 'express-yup-middleware'
import { addUserSchemeValidator } from "../../Models/userSchemaValid";
import { IUser, User } from "../../Models/userSchemaMongo";
import bcrypt from 'bcrypt'


export default class Inscription{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){
        // GET '/home/signup/'
        this.router.get('/home/signup/',(req : Request,res : Response) =>{
            res.sendFile(path.join(__dirname,'../../../public/page/inscription.html'));
        })

        // POST '/home/signup/adduser'
        this.router.post(
            '/home/signup/adduser',
            // ** valider le request
            expressYupMiddleware({
                schemaValidator: addUserSchemeValidator,
                expectedStatusCode : StatusCodes.BAD_REQUEST
            }),
            (req : Request,res : Response) =>{
            const {body : donne} = req;
        
            const enregistrement = async (IUser : IUser) =>{
                try {
                    // ** vérifier si le nom est déjà utiliser
                    const isNameReadyExist = await User.findOne({
                        nom : IUser.nom
                    })

                    // ** Ajoute d'une condition si l'utilisateur est déjà exist, envoyons une reponse c'est déjà utiliser ce nom
                    if (isNameReadyExist){
                        res.status(StatusCodes.BAD_REQUEST).json({
                          status: StatusCodes.BAD_REQUEST,
                          succes : false,
                          message: "nom déjà utiliser",
                        });
                        return; // arrête
                    }

                    // ** si non,créer un nouveul utilisateur
                    // ** hasher le password en utilisant bcrypt
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(IUser.motDePasse, salt, async function (err, hash) {
                            // Store hash in the database
                            // creation d'utilisateur
                            await User.create({
                                nom : IUser.nom,
                                motDePasse : hash
                            })
                    
                        });
                    })

                    // ** set session par nom et motDePasse
                    req.session.nom = IUser.nom
                    req.session.motDePasse = IUser.motDePasse

                    res.status(StatusCodes.CREATED).send({
                        status : ReasonPhrases.CREATED,
                        succes : true,
                        message : "user created successfully",
                        user : {
                            "nom" : IUser.nom,
                            "motDePasse" : IUser.motDePasse
                        }
                    })

                    

                } catch (error) {
                    console.log(error);
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                        "status" : StatusCodes.INTERNAL_SERVER_ERROR,
                        "message" : "try to change the name"
                    })
                }
            }

            enregistrement(donne);
        })
    }
    
    public getRouter() : Router {
        return this.router
    }
    
}
