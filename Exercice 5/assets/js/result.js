var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
  // Déclaration des variables qui vont récupérer les valeurs des champs de saisie
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  if (isNaN(firstNumber) == true || isNaN(secondNumber)) {
    alert('erreur : ce n\'est pas un nombre');
  } else {
    alert(firstNumber * secondNumber);
  }
}