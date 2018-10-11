
document.getElementById('image1').addEventListener('mouseover', function(){
  // la fonction est : je modifie le style de l'image1
  document.getElementById('image1').style.border = '3px solid red';
}
)
document.getElementById('image1').addEventListener('mouseout', function(){
  // la fonction est : je modifie en direct l'url de l'image
  document.getElementById('image1').style.border = '';
}
)
