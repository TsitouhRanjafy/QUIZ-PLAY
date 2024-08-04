
// 
const btnSign = document.getElementById('sign');
const btnProfile = document.getElementById('compte');
const spanExist = document.getElementById('spanExist');

// pour l'affiche du profile ou login
if (!spanExist){
    btnProfile.classList.add('hidden');
    btnSign.classList.remove('hidden');
    console.log(`userName : NON DEFINIE`);
} else {
    btnProfile.classList.remove('hidden');
    btnSign.classList.add('hidden');
    console.log(`userName : DEFINIE`);
}

