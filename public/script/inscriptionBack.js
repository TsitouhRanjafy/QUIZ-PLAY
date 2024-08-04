
const form = document.getElementById("form");
const baliseErreur = document.getElementById('error');
const inputName = document.getElementById('nom');
const inputMdp = document.getElementById('motDePasse');
const containerResult = document.getElementById('container-result');
const signIn = document.getElementById('signIn');
const imageSignIn = document.getElementById('imageSignIn');


// OnInput , suprimer le phrase d'erreur
inputName.addEventListener('input',() =>{
    baliseErreur.textContent = "";
})
inputMdp.addEventListener('input',() =>{
    baliseErreur.textContent = "";
})

// OnSubmit
form.addEventListener('submit', () =>{
    event.preventDefault();
    const name = document.getElementById('nom').value;
    const motDePasse = document.getElementById('motDePasse').value;

    fetch('/home/signup/adduser',{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            nom : name,
            motDePasse : motDePasse
        })
    }) .then(response => {
        return response.json(); 
    }).then((donne) =>{

        // S'il retourne un erreur
        if (donne.status == 400){
            baliseErreur.textContent = donne.message;
        }
        // Si c'est CREATED
        // Affiche le page pour aller à l'acceuil
        if (donne.succes){
            signIn.classList.add('hidden');
            imageSignIn.classList.add('hidden')
            containerResult.classList.remove('hidden');
        }
    })
    .catch((error) =>{
        console.log("  misy erreur :",error);
    })

})

