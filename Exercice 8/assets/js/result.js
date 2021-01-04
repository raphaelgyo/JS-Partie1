var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
    //Déclaration de la variable age
    var age = document.getElementById('age').value;
    // on compare la valeur de la variable age : si elle est supérieure ou égale à 18, alors le visiteur est majeur
    if (age >= 18) {
        alert("Vous êtes majeur, vous pouvez accéder à notre site");
    }
    //si la valeur de la variable age est inférieure à 18, alors le visiteur est mineur
    else {
        alert("Vous êtes mineur, dégagez !");
    }
}