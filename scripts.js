var ajd = new Date();
document.querySelector('.date').innerHTML= ajd.toLocaleDateString("fr") ;






let poidsAjd= Number (document.getElementById('poidsAjd').value);

let tailleUser = Number (document.getElementById("tailleUser").value);

let resultatUser = document.getElementById("resultatUser");


let resultImc  = poidsAjd / (tailleUser*tailleUser) .toFixed(2);


document.getElementById("reponse").innerHTML=`Votre imc est de ${resultImc}`





if(resultImc<=18,5){
   document.getElementById("resultatUser").innerHTML = "Vous êtes un peu trop maigre.";
   resultatUser.classList.add('bluesky'); // true
}

if(resultImc >=18,5 &&   resultImc <= 25 ){
   document.getElementById("resultatUser").innerHTML = "Vous êtes normal."
   resultatUser.classList.add('green'); // true
}

if(resultImc >=25 &&  resultImc <= 30){
   document.getElementById("resultatUser").innerHTML = "Vous êtes en surpoids."
   resultatUser.classList.add('orange'); // true
}

if(resultImc >=30 &&  resultImc <=  40){
   document.getElementById("resultatUser").innerHTML = "Vous êtes en obèse."
   resultatUser.classList.add('orangedark'); // true
}

if(resultImc >=40){
   document.getElementById("resultatUser").innerHTML = "Vous êtes en obésité sevère."
   resultatUser.classList.add('red'); // true
}

function CalculPoids(){
   document.getElementById('reponse').innerHTML=`${resultImc}`
}