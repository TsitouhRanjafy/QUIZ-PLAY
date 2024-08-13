const quizData1 = [
    {
        question : "Qu'est ce que l'UI ?",
        a : "Usine Internationale",
        b : "Users Interface",
        c : "Union Triangulaire",
        reponse : "b"
    },
    {
        question : "Qu'est ce que l'UX ?",
        a : "Upload Experience",
        b : "Update Expedition",
        c : "Users Experience",
        reponse : "c"
    },
    {
        question : "Quel est le logiciel pour le Web Design ou UI UX Design ?",
        a : "Adobe Photoshop",
        b : "Adobe XD",
        c : "Adobe illustrator",
        reponse : "b"
    },
    {
        question : "Choisis le vrai framework front-end : ",
        a : "React.js",
        b : "Node.js",
        c : "Express.js",
        reponse : "a"
    },
    {
        question : "Quel est le bon processus pour une conception d'une interface d'un site ?",
        a : "Dev-Front-End -> Maquette -> Wireframe",
        b : "Maquette -> Dev-Front-End -> WIreframe",
        c : "Wireframe -> Maquette -> Dev-Front-End",
        reponse : "c"
    } 
];

//Algo Pro
const quizData2 = [
    {
        question : "Qu'est-ce qu'un algorithme ?",
        a : "Une méthode de stockage des données",
        b : "Un outil de débogage",
        c : "Un ensemble de règles pour résoudre un problème",
        reponse : "c"
    },
    {
        question : "Quelle est la différence entre une liste et une pile ?",
        a : "Une pile utilise LIFO, une liste est ordonnée",
        b : "Une pile utilise FIFO, une liste utilise LIFO",
        c : "Une liste est immuable, une pile est mutable",
        reponse : "a"
    },
    {
        question : "Quel est le tri le plus efficace en termes de complexité temporelle moyenne ?",
        a : "Tri à bulles",
        b : "Tri par sélection",
        c : "Tri rapide (QuickSort)",
        reponse : "c"
    },
    {
        question : "Quelle est la principale caractéristique d'un tableau ?",
        a : "Une structure de données hiérarchique",
        b : "Une collection de paires clé-valeur",
        c : "Une collection d'éléments de même type en mémoire contiguë",
        reponse : "c"
    },
    {
        question : "Qu'est-ce qu'un pointeur en programmation ?",
        a : "Une variable qui stocke l'adresse mémoire d'une autre variable",
        b : "Un type de variable qui contient des chaînes de caractères",
        c : "Une fonction qui retourne des adresses",
        reponse : "a"
    }
];

//Base de donnée
const quizData3 = [
    {
        question : "Qu'est-ce qu'une base de données relationnelle ?",
        a : "Une base de données qui stocke des fichier",
        b : "Une base de données qui utilise des graphes",
        c : "Une base de données qui organise les données en tables avec des relations entre elles",
        reponse : "c"
    },
    {
        question : "Quel langage est utilisé pour interagir avec les bases de données relationnelles ?",
        a : "XML",
        b : "CSS",
        c : "SQL",
        reponse : "c"
    },
    {
        question : "Qu'est-ce qu'une clé primaire dans une base de données ?",
        a : "Un champ unique qui identifie chaque enregistrement dans une table",
        b : "Une relation entre deux tables",
        c : "Une clé de sécurité pour les utilisateurs",
        reponse : "a"
    },
    {
        question : "Quel est le rôle d'un index dans une base de données ?",
        a : "Créer une relation entre les table",
        b : "Accélérer les opérations de recherche et de tri",
        c : "Sauvegarder les données",
        reponse : "b"
    },
    {
        question : "Que fait la commande SQL SELECT ?",
        a : "Modifie des données dans la base",
        b : "Récupère des données de la base",
        c : "Crée une nouvelle table",
        reponse : "b"
    }
];

//JS
const quizData4 = [
    {
        question : "Quel est le type de langage de programmation de JavaScript ?",
        a : "Langage compilé",
        b : "Langage interprété",
        c : "Langage d'assemblage",
        reponse : "b"
    },
    {
        question : "Comment déclare-t-on une variable en JavaScript ?",
        a : "var, let, ou const",
        b : "int, float, ou double",
        c : "declare, define, ou set",
        reponse : "a"
    },
    {
        question : "Quel est l'opérateur d'égalité stricte en JavaScript ?",
        a : "!=",
        b : "===",
        c : "==",
        reponse : "b"
    },
    {
        question : "Qu'est-ce qu'une fonction fléchée (arrow function) ?",
        a : "Un type de boucle pour parcourir les objet",
        b : "Une méthode pour accéder à une fonction globale",
        c : "Une syntaxe alternative pour déclarer des fonctions anonymes",
        reponse : "c"
    },
    {
        question : "Comment peut-on ajouter un élément à la fin d'un tableau en JavaScript ?",
        a : "array.add(element)",
        b : "array.add(element)",
        c : "array.push(element)",
        reponse : "c"
    }
];

//Ordinateur
const quizData5 = [
    {
        question : "Quel est le composant principal responsable du traitement des données dans un ordinateur ?",
        a : "Carte graphique (GPU)",
        b : "Processeur (CPU)",
        c : "Mémoire vive (RAM)",
        reponse : "b"
    },
    {
        question : "Quelle est la différence principale entre la RAM et le disque dur ?",
        a : "La RAM est plus lente que le disque dur",
        b : "La RAM stocke les données de manière permanente, contrairement au disque dur",
        c : "La RAM est une mémoire volatile, tandis que le disque dur est un stockage permanent",
        reponse : "c"
    },
    {
        question : "Quel composant d'un ordinateur est responsable du rendu des graphiques et des vidéos ?",
        a : "Carte son",
        b : "Carte graphique (GPU)",
        c : "Disque dur (HDD)",
        reponse : "b"
    },
    {
        question : "Qu'est-ce que le BIOS dans un ordinateur ?",
        a : "Un programme de démarrage qui initialise le matériel de l'ordinateur",
        b : "Une méthode pour accéder à une fonction globale",
        c : "Un utilitaire de gestion de fichiers",
        reponse : "a"
    },
    {
        question : "Quel type de mémoire est utilisé pour stocker le BIOS ?",
        a : "RAM",
        b : "ROM",
        c : "Registre",
        reponse : "b"
    }
];

//Java
const quizData6 = [
    {
        question : "Quel est le rôle de la JVM (Java Virtual Machine) ?",
        a : "Compiler le code Java",
        b : "Déboguer les applications Java",
        c : "Exécuter le code Java bytecode",
        reponse : "c"
    },
    {
        question : "Comment déclare-t-on une variable en Java ?",
        a : "int variable;",
        b : "variable int;",
        c : "var int variable;",
        reponse : "a"
    },
    {
        question : "Quelle est la méthode principale d'une application Java ?",
        a : "start()",
        b : "run()",
        c : "main()",
        reponse : "c"
    },
    {
        question : "Qu'est-ce que l'encapsulation en Java ?",
        a : "L'héritage d'une classe",
        b : "La création d'interfaces",
        c : "La protection des données en rendant les attributs privés et en fournissant des méthodes publiques",
        reponse : "a"
    },
    {
        question : "Comment crée-t-on une instance d'une classe en Java ?",
        a : "ClassName obj = ClassName()",
        b : "ClassName obj = new ClassName()",
        c : "new ClassName obj = new();",
        reponse : "b"
    }
];

//PHP
const quizData7 = [
    {
        question : "Quel est le but principal de PHP ?",
        a : "Manipuler des fichiers",
        b : "Créer des pages web dynamiques côté serveur",
        c : "Gérer les bases de données",
        reponse : "b"
    },
    {
        question : "Quelle est la méthode pour inclure un fichier PHP dans un autre fichier PHP ?",
        a : "require()",
        b : "include()",
        c : "import()",
        reponse : "b"
    },
    {
        question : "Comment peut-on obtenir la longueur d'une chaîne de caractères en PHP ?",
        a : "count()",
        b : "length()",
        c : "strlen()",
        reponse : "c"
    },
    {
        question : "Quelle est la fonction pour vérifier si une variable est définie en PHP ?",
        a : "isset()",
        b : "isDefined()",
        c : "defined()",
        reponse : "a"
    },
    {
        question : "Quelle fonction PHP est utilisée pour exécuter une requête SQL ?",
        a : "execute_query()",
        b : "query()",
        c : "run_query()",
        reponse : "b"
    }
];

//Systeme exploitation
const quizData8 = [
    {
        question : "Quel est le rôle principal d'un système d'exploitation ?",
        a : "Fournir des applications bureautiques",
        b : "Développer des logiciels",
        c : "Gérer les ressources matérielles et logicielles d'un ordinateur",
        reponse : "c"
    },
    {
        question : "Quel est le système d'exploitation open-source le plus populaire ?",
        a : "Windows",
        b : "Linux",
        c : "macOS",
        reponse : "b"
    },
    {
        question : "Quel est le rôle d'un noyau (kernel) dans un système d'exploitation ?",
        a : "Gérer les interfaces utilisateur",
        b : "Gérer la communication entre le matériel et les logiciels",
        c : "Gérer les périphériques externes",
        reponse : "b"
    },
    {
        question : "Qu'est-ce qu'un processus en arrière-plan dans un système d'exploitation ?",
        a : "Un processus qui s'exécute sans interaction directe avec l'utilisateur",
        b : "Un processus qui se bloque en cas d'erreur",
        c : "Un processus qui est exécuté en priorité par le système",
        reponse : "a"
    },
    {
        question : "Quelle commande Unix est utilisée pour afficher le contenu d'un répertoire ?",
        a : "cd",
        b : "ls",
        c : "mkdir",
        reponse : "b"
    }
];