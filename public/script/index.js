const containerMain = document.getElementById('container-main');
const buttonDeconnect = document.getElementById('button-deconnect');
const containerAvertissement = document.getElementById('container-avertissement');
const btnPopupAnnuler = document.getElementById('annuler');

// pour l'avertissement de deconnexion
buttonDeconnect.addEventListener('click',() =>{
    containerMain.classList.add('blur-disable');
    containerAvertissement.classList.remove('hidden');
})

// pour annuler le deconnexion 
btnPopupAnnuler.addEventListener('click',() =>{
    containerMain.classList.remove('blur-disable');
    containerAvertissement.classList.add('hidden');
})
