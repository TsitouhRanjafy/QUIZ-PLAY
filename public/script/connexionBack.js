
const form = document.getElementById('form');
const inputName = document.getElementById('nom');
const inputMotDePasse = document.getElementById('motDePasse');
const baliseErreur = document.getElementById('error')

// OnInput 
inputName.addEventListener('input',() =>{
    baliseErreur.textContent = "";
})
inputMotDePasse.addEventListener('input',() =>{
    baliseErreur.textContent = "";
})


form.addEventListener('submit', () =>{
    event.preventDefault();
    const nom = inputName.value;
    const motDePasse = inputMotDePasse.value;

    fetch('/home/signin/in',{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            nom : nom,
            motDePasse : motDePasse
        })
    }).then(response => response.json())
    .then((message) =>{

        // s'il y a un erreur
        if (!message.success){
            baliseErreur.textContent = message.message
        } else {
            const lien = document.createElement('a');
            lien.href = "/home"
            lien.click();
        }
    })
    .catch((error) =>{
        console.log("misy erreur ",error);
    })
})




