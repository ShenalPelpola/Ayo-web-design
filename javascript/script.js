const shenal = document.getElementById("shenalImg");
const shenalD = document.getElementById("shenalDescription");

const chamath = document.getElementById("chamathImg");
const chamathD = document.getElementById("chamathDescription");

const chamika = document.getElementById("chamika");
const chamikaD = document.getElementById("chamikaDescription");

const jayamal = document.getElementById("jayamalImg");
const jayamalD = document.getElementById("jayamalDescription");




//shenal pelpola
shenal.addEventListener('mouseover', (event) => {
  shenalD.innerHTML = 
  "<ol> <li>First name:   Shenal</li>"+
  "<li>Last name:   Pelpola</li>"+
  "<li> IIT ID:   2018198</li>"+
  "<li> Uow ID:   W1714945</li>"+
  "<li> Student: 2 </li></ol>";
  shenalD.style.backgroundColor = "black";
  shenalD.style.color = "white";

});
shenal.addEventListener('mouseout', (event) => {
  shenalD.innerHTML = "";
;
});

//chamath peiris
chamath.addEventListener('mouseover', (event) => {
  chamathD.innerHTML = 
  "<ol> <li>First name:   Chamath</li>"+
  "<li>Last name:   Peiris</li>"+
  "<li> IIT ID:   2018116</li>"+
  "<li> Uow ID:   W1714892</li>"+
  "<li> Student: 3 </li></ol>";
  chamathD.style.backgroundColor = "black";
  chamathD.style.color = "white";



});
chamath.addEventListener('mouseout', (event) => {
  chamathD.innerHTML = "";
});

//chamika chiran
chamika.addEventListener('mouseover', (event) => {
  chamikaD.innerHTML = 
  "<ol> <li>First name:Chamika</li>"+
  "<li>Last name:Chiran</li>"+
  "<li>IIT ID:2018101</li>"+
  "<li>Uow ID:W1714889</li>"+
  "<li> Student: 4 </li></ol>";
  chamikaD.style.backgroundColor = "black";
  chamikaD.style.color = "white";
});
chamika.addEventListener('mouseout', (event) => {
  chamikaD.innerHTML = "";
});


//jayamal shanuka
jayamal.addEventListener('mouseover', (event) => {
  jayamalD.innerHTML = 
  "<ol><li>First name:   Jayamal</li>"+
  "<li>Last name:   Shanuka</li>"+
  "<li>IIT ID:   2018049</li>"+
  "<li>Uow ID:   W1714876</li>"+
  "<li> Student: 1 </li></ol>";
  jayamalD.style.backgroundColor = "black";
  jayamalD.style.color = "white";
});
jayamal.addEventListener('mouseout', (event) => {
  jayamalD.innerHTML = "";
});




window.onscroll = function() {stickyEffect()};

var navbar = document.getElementById("container");
var sticky = navbar.offsetTop;

function stickyEffect() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
      slideIndex = 1
      }    
  if (n < 1) {
      slideIndex = slides.length
      }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}


//Image location display//
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("locationpic1").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.88061968673!2d79.8550363!3d6.8941733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3cb49d41e94dfeed!2sMajestic+City!5e0!3m2!1sen!2slk!4v1552804119299' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});

document.getElementById("locationpic2").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.297389062373!2d79.8514441!3d6.9115951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x141db277b60011d8!2sLiberty+Plaza!5e0!3m2!1sen!2slk!4v1552803476812' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});

document.getElementById("locationpic3").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.093762058337!2d79.8553711!3d6.9176674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x872e9262f485d782!2sColombo+City+Centre!5e0!3m2!1sen!2slk!4v1552885832276' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});

document.getElementById("locationpic4").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.671442780242!2d79.8529925!3d6.9004267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b9f2109905dde6d!2sMarino+Mall!5e0!3m2!1sen!2slk!4v1552886140274' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});

document.getElementById("locationpic5").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5477820989754!2d80.63475191477504!3d7.292179194736786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662be0c2cc7f%3A0xfd9ffe3da66f497!2sKandy+City+Centre%2C+Sri+Dalada+Veediya%2C+Kandy+20000!5e0!3m2!1sen!2slk!4v1552886420864' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});

document.getElementById("locationpic6").addEventListener("click",()=>{
  modal.style.display = "block";
  document.getElementById("map").innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.594901638533!2d79.8440011!3d6.9325214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb35822a3ace0857!2sWorld+Trade+Center!5e0!3m2!1sen!2slk!4v1552886656372' width='400' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>";
});