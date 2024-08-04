"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./Routing/route"));
const path_1 = __importDefault(require("path"));
const qrcode_1 = __importDefault(require("qrcode"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
dotenv_1.default.config();
const port = process.env.PORT || 4000;
const app = (0, express_1.default)();
// ___________________________ MIDDLEWARE START ____________________ \\
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    // expire après 24h
    cookie: { maxAge: 24 * 60 * 60000 }
}));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../public'));
const cheminStatic = path_1.default.join(__dirname, '../public');
const cheminStaticCss = path_1.default.join(__dirname, '../public/assets');
const cheminStaticImage = path_1.default.join(__dirname, '../public/image');
const cheminStaticPage = path_1.default.join(__dirname, '../public/page');
const cheminStatiScript = path_1.default.join(__dirname, '../public/script');
app.use(express_1.default.static(cheminStatic));
app.use(express_1.default.static(cheminStaticCss));
app.use(express_1.default.static(cheminStaticImage));
app.use(express_1.default.static(cheminStaticPage));
app.use(express_1.default.static(cheminStatiScript));
// ___________________________ ROUTING START ____________________ \\
const routes = new route_1.default(app);
routes.initialisez();
// ___________________________ SERVEUR START ____________________ \\
app.listen(port, () => {
    // code QR sur terminal pour le port
    qrcode_1.default.toString(`http://localhost:${port}`, { type: 'terminal' }, function (err, url) {
        console.log(url);
    });
    console.log(`Serveur demarrer sur \"localhost:${port}\" `);
});
const demarrageDB = async () => {
    try {
        // essayer de se connecter avec le serveur de la base  de donnée
        if (!process.env.MONGODB_URL) {
            return;
        }
        await mongoose_1.default.connect(process.env.MONGODB_URL);
        console.log(' connexion à la base de donnée réussi');
    }
    catch (error) {
        console.log('connexion à la base de donnée echoue : ', error);
    }
};
demarrageDB();
