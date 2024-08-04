import express, { Application, urlencoded,Request,Response, Router } from 'express'
import Route from './Routing/route';
import path from 'path';
import qrcode  from 'qrcode';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import session from 'express-session';

dotenv.config();

const port = process.env.PORT || 4000
const app : Application = express();

// session data interface
declare module 'express-session' {
    interface SessionData {
        nom : string | null,
        motDePasse : string | null
    }
}

// ___________________________ MIDDLEWARE START ____________________ \\


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(session({
    secret : "key",
    resave : false,
    saveUninitialized : true,
    // expire après 24h
    cookie : { maxAge : 24 * 60 * 60000 }
}))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'../public'));


const cheminStatic = path.join(__dirname,'../public');
const cheminStaticCss = path.join(__dirname,'../public/assets');
const cheminStaticImage = path.join(__dirname,'../public/image');
const cheminStaticPage = path.join(__dirname,'../public/page');
const cheminStatiScript = path.join(__dirname,'../public/script');
app.use(express.static(cheminStatic))
app.use(express.static(cheminStaticCss))
app.use(express.static(cheminStaticImage))
app.use(express.static(cheminStaticPage))
app.use(express.static(cheminStatiScript))


// ___________________________ ROUTING START ____________________ \\


const routes : Route = new Route(app)
routes.initialisez();


// ___________________________ SERVEUR START ____________________ \\


app.listen(port,() =>{
    // code QR sur terminal pour le port
    qrcode.toString(`http://localhost:${port}`,{type:'terminal'}, function (err, url) {
        console.log(url)
    })
    console.log(`Serveur demarrer sur \"localhost:${port}\" `);
})


const demarrageDB = async () =>{
    try {
        // essayer de se connecter avec le serveur de la base  de donnée
        if (!process.env.MONGODB_URL){
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(' connexion à la base de donnée réussi');
    } catch (error) {
        console.log('connexion à la base de donnée echoue : ',error)
    }
}
demarrageDB();
