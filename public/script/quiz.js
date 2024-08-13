let quizList = document.querySelectorAll(".question");
let quizContainer = document.querySelector(".Quiz");

//Recupération des boutons dans les divers
let btnQuiz1 = document.getElementById("btnQuiz1");

//Ajout d'évènement
btnQuiz1.addEventListener = ("click", () => jouer(2));

//initialisation
let quizEnCours;

//Cherche du boutton cliqué par l'user
function jouer(quizId){
    switch (quizId) {

        case 1 :
            quizEnCours = quizData1;
            break;
        case 2 :
            quizEnCours = quizData2;
            break;

        default :
            alert("Quiz non reconnue !");
            return;
    }

    //Initialisation des index et des scores de chaque Quiz
    let i = 0;
    let score = 0;
    ChangementQuiz();
}

//Changement d'etat du contenu du quiz
function ChangementQuiz(){
    quizContainer.innerHTML = `
        <div class="headerQuizGame">
            <h3 style="font-size: 28px; font-weight: 300;">Question ${i+1}</h3>
            <h1 style="font-size: 42px; max-width: 30vw;">${quizEnCours[i].question}</h1>
        </div>
        <div class="listQuestion">
            <li><input type="radio" name="reponse" value="a">${quizEnCours[i].a}</li>
            <li><input type="radio" name="reponse" value="b">${quizEnCours[i].b}</li>
            <li><input type="radio" name="reponse" value="c">${quizEnCours[i].c}</li>
        </div>
        <div class="bouttonValider">
            <button onclick="soumissionQuiz()">Valider</button>
        </div>
`;
};

function soumissionQuiz(){
    const reponsePossible = document.querySelectorAll('input[name="reponse"]');
    let reponseUser;

    //Cherche la reponse cliquée par l'utilisateur
    reponsePossible.forEach ( element => {
        if (element.checked) {
            reponseUser = element.value;
        }
    });

    // Test unitaire
    if ( reponseUser ) {

        //si la reponse selectionnée par l'user est vrai
        if ( reponseUser === quizEnCours[i].reponse ) {
            score++;
        }
        i++;

        if ( i < quizData.length) {
            ChangementQuiz();
        }
        else {
            quizContainer.innerHTML = `
                <h1 style="font-size: 42px; max-width: 40vw;">Félicitation, vous avez terminé le quiz</h1>
                <h3 style="font-size: 28px; font-weight: 600;">Score :  ${score} / ${quizData.length}</h3>
            `;
        }
    }
    else {
        alert("Veuillez séléctionné une reponse !");
    }
};

window.onload = ChangementQuiz;
console.log(btnQuiz1);
