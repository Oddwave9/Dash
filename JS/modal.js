// GET modal elements

var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for click
modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);

//Close MOdal
closeBtn.addEventListener('click', closeModal);

// OUttside click
window.addEventListener('click', outsideClick);

//Funct OPen modal

function openModal(){
  modal.style.display = 'block';

}

//Close MOdal
function closeModal(){
  modal.style.display = 'none';
}
 
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}