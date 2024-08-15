let btn = document.getElementById("btnQuiz1");
let containerQuiz = document.getElementById("containerQuiz");
let containerListeQuiz = document.getElementById("containerListeQuiz");
let idQuiz;

let i = 0; 
let score = 0;
let quiz;  // Déclaration globale de 'quiz'

function quizWeb(quizId){ //QuizId est le parametre du fonction quizWeb et qui est de type string définie dans l'id des boutons dans le HTML
    quiz = quizData[quizId];  // Initialisation de 'quiz'
    containerListeQuiz.style.display = "none";
    containerQuiz.style.display = "flex";
    afficherQuestion();
}

function afficherQuestion() {
    containerQuiz.innerHTML = `
        <div class="navQuiz">
            <a href="/home/listeJeux">
                <img src="../icons/angle-gauche.png" style="width: 25px; margin-right: 8px;">
            </a>
            <div class="titreQuiz">
            </div>
        </div>
        <div class="headerQuizGame">
            <h3 style="font-size: 28px; font-weight: 300;">Question ${i+1}</h3>
            <h1 style="font-size: 42px">${quiz[i].question}</h1>
        </div>
        <div class="listQuestion">
            <li><input type="radio" name="reponse" value="a">${quiz[i].a}</li>
            <li><input type="radio" name="reponse" value="b">${quiz[i].b}</li>
            <li><input type="radio" name="reponse" value="c">${quiz[i].c}</li>
        </div>
        <div class="bouttonValider">
            <button id="validerBtn">Valider</button>
        </div>
    `;

    document.getElementById("validerBtn").addEventListener("click", soumissionQuiz);
}

function soumissionQuiz(){

    const reponsePossible = document.querySelectorAll('input[name="reponse"]');
    let reponseUser;

    reponsePossible.forEach(element => {
        if (element.checked) {
            reponseUser = element.value;
        }
    });

    if (reponseUser) {

        if (reponseUser === quiz[i].reponse) {
            score++;
        }
        i++;

        if (i < quiz.length) {
            afficherQuestion();  // Appelle la fonction pour afficher la prochaine question
        }
        else {
            containerQuiz.innerHTML = `
                <div class="congratulation">    
                    <h1 style="font-size: 42px; max-width: 40vw;">Félicitation, vous avez terminé le quiz</h1>
                    <h3 style="font-size: 28px; font-weight: 600;">Score :  ${score} / ${quiz.length}</h3>
                    <a href="/home/listeJeux">
                        <button class="btnCongrat">Voir autre quiz</button>
                    </a>
                </div>
            `;
        }

    } else {
        alert("Veuillez sélectionner une réponse !");
    }
}
