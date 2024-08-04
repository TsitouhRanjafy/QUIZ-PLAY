const inputMdp = document.getElementById('motDePasse');
const inputCheckbox = document.getElementById('check');

// pour afficher et cacher le mot de passe
inputCheckbox.onchange = function(e) {
    inputMdp.type = inputCheckbox.checked ? "text" : "password";
};
