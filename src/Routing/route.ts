// ____________________________________  GESTION DE ROUTE  ____________________________________ \\

import { Application , Request , Response } from "express";
import { StatusCodes , ReasonPhrases } from "http-status-codes";
import path from 'path'
import HomeRoutes from "./Home/homeRoute";
import Inscription from "./Users/inscription";
import Connexion from "./Users/connexion";
import Profile from "./Users/profile";
import JeuxRoutes from "./Jeux/jeux";
import ClassementRoute from "./Users/classement";


export default class Route {
    private rout : Application

    constructor (app : Application){
        this.rout = app;
    }

    public initialisez (){
        // GET '/'
        this.rout.get('/',(req : Request, res : Response) =>{
            res.redirect('/home');
        })

        // Gestion de route home
        const homeroute : HomeRoutes = new HomeRoutes
        this.rout.use(homeroute.getRouter());

        // Gestion de route inscriptoin
        const inscriptionroute : Inscription = new Inscription
        this.rout.use(inscriptionroute.getRouter());

        // Gestion de route connexion
        const connexionroute : Connexion = new Connexion
        this.rout.use(connexionroute.getRouter());

        // Gestion de route profile
        const profileroute : Profile = new Profile
        this.rout.use(profileroute.getRouter());

        // Gestion de route Jeux
        const jeuxroute : JeuxRoutes = new JeuxRoutes
        this.rout.use(jeuxroute.getRouter());

        // Gestion de route Classement 
        const classementroute : ClassementRoute = new ClassementRoute
        this.rout.use(classementroute.getRouter());
    }

}