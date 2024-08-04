let quizList = document.querySelectorAll(".question");
let quizContainer = document.querySelector(".Quiz");


//initialisation
let i = 0;
let score = 0;

//Changement d'etat du contenu du quiz
function ChangementQuiz(){
    quizContainer.innerHTML = `
        <div class="headerQuizGame">
            <h3 style="font-size: 28px; font-weight: 300;">Question ${i+1}</h3>
            <h1 style="font-size: 42px; max-width: 30vw;">${quizData[i].question}</h1>
        </div>
        <div class="listQuestion">
            <li><input type="radio" name="reponse" value="a">${quizData[i].a}</li>
            <li><input type="radio" name="reponse" value="b">${quizData[i].b}</li>
            <li><input type="radio" name="reponse" value="c">${quizData[i].c}</li>
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
        if ( reponseUser === quizData[i].reponse ) {
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
