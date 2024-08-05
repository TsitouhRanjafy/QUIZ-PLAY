import express, { Router,Request,Response } from "express";
import { User } from "../../Models/userSchemaMongo";
import path from "path";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";
import { expressYupMiddleware } from "express-yup-middleware";
import { addUserSchemeValidator } from "../../Models/userSchemaValid";


export default class Connexion{
    private router : Router

    constructor (){
        this.router = express.Router()
        this.initialisation()
    }

    private initialisation(){
        // GET '/home/signup/'
        this.router.get('/home/signin/', (req : Request,res : Response) =>{

            if (req.session.nom){
                return;
            }

            res.sendFile(path.join(__dirname,'../../../public/page/connexion.html'));
        })


        // POST '/home/signup/in'
        this.router.post('/home/signin/in',
            expressYupMiddleware({
                schemaValidator : addUserSchemeValidator,
                expectedStatusCode : StatusCodes.BAD_REQUEST
            }),
            async (req : Request,res : Response) =>{
            try {
                
                // ** get donné depuis le body
                const {body : donne} = req
    
                // ** Déstructurer les informations ;
                const { nom : nom , motDePasse }  = donne
    
                // ** Vérifiez si le (nom/User) existe dans la base de données ou non;
                const isUserExist = await User.findOne({
                    nom : nom
                });

                // ** S’il n’y a pas d’utilisateur avec l’e-mail, nous envoyons que l’utilisateur est introuvable;
                // ** Si isUserExist à de valeur,l'email de l'utilisateur exist => l'utilisateur exist
                if (!isUserExist) {

                    res.status(StatusCodes.NOT_FOUND).json({
                        status: ReasonPhrases.NOT_FOUND,
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
                    let isPasswordMatched = await bcrypt.compare(motDePasse,isUserExist?.motDePasse)
                    if (!isPasswordMatched) {

                        res.status(StatusCodes.BAD_REQUEST).json({
                            status: ReasonPhrases.BAD_REQUEST,
                            success: false,
                            message: "wrong password",
                        });
                        return; // arrête
                    }
                } catch (error) {
                    console.log(error);
                }

                // ** Alors si le nom et mot de passe sont valid, create a token
                // ** C'est notre JWT Token
                const token = jwt.sign(
                    { _id: isUserExist?._id, motDePasse: isUserExist?.motDePasse },
                    "YOUR_SECRET",
                    {
                    expiresIn: "1d",
                    }
                );
                
                // ** set le session par le nom et motDePasse
                req.session.nom = isUserExist.nom;
                req.session.motDePasse = donne.motDePasse;

                // ** envoyez le response
                res.status(StatusCodes.OK).json({
                    status: ReasonPhrases.OK,
                    success: true,
                    message: "login success",
                    token: token,
                });

                
            } catch (error : any) {
                // Send the error message to the client
                res.status(StatusCodes.BAD_REQUEST).json({
                    status: ReasonPhrases.BAD_REQUEST,
                    message: error.message.toString(),
                });
            }

        })

    }
    
    public getRouter() : Router {
        return this.router
    }
    
}
