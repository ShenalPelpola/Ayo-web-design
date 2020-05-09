var modal = document.getElementById('myModal');
var model_content= document.getElementById("modal-content");

// Get the button that opens the modal
var btn = document.getElementById("feedback");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  $("#myModal").slideDown(1000);
  $("#modal-content").slideDown(1000);

}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    after.style.display ="none";
  }
}
var userName = document.getElementById("name");
var rating = document.getElementById("rating");
var after = document.getElementById("after");




//The main error message that displays at the top of the form when name and the rating is not selected.


function topValidation(){  
    $("#Error_div").slideDown().delay(3000).slideUp();
    model_content.style.height = "700px";

}

//When the user hasn't given the name.
function nameError(){
    userName.style.border = "1px solid red";
    userNameValidation.textContent = "Please add a name.";
    userNameValidation.style.color = "white";
    userNameValidation.style.backgroundColor = "firebrick";
}

//when the user hasn't selected the rating.
function ratingsError(){
    select_div.textContent="Please add a rating.";
    select_div.style.color="white";
    select_div.style.backgroundColor="Firebrick";
    rating.style.border= "1px solid red";
    model_content.style.height = "720px";
}

//Removing the effects done by topValidation,nameError,ratingError when the user fills the entire form.
function ErrorClear(){
    Error_div.textContent="";
    Error_div.style.backgroundColor="none";
    Error_div.style.padding="0";
    select_div.textContent="";
    select_div.style.backgroundColor="none";
    rating.style.border= "none";
    userName.style.border = "none";;
    userNameValidation.textContent = "";
    userNameValidation.style.backgroundColor = "none"; 
    model_content.style.height = "650px";
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("rating").value = "select option";
    document.getElementById("comment").value = "";
}

function displayThanks(){
    model_content.style.display = "none";
    after.style.display= "flex";
}

function validateForm(){
    if(userName.value==""){
        topValidation();
        nameError();
        return false;
   
    }
    if(rating.value=="select option"){
        topValidation();
        ratingsError();
        return false;
    }

    if(userName.value!="" && rating.value!="select option"){
        if(document.getElementById('comment').value == ''){
            ErrorClear();
            displayThanks();
            document.getElementById("thank").innerHTML = "Dear " + userName.value + ",Thank you very much for your feedback. " +
             "You have rated the site " + rating.value+ ".";
            return false;
        }
        else{
            ErrorClear();
            displayThanks();
            document.getElementById("thank").innerHTML = "Dear " + userName.value + ",Thank you very much for your feedback. " +
            "You have rated the site " + rating.value+ ".Your comment was " + document.getElementById('comment').value +".";
            return  false;
        }
        document.getElementById("myform").releasePointerCapture;  
    }
}

document.getElementById("cross").addEventListener("click",()=>{
    modal.style.display ="none";
    ErrorClear();
    resetForm()
})

document.getElementById("newcross").addEventListener("click",()=>{
    modal.style.display ="none";
    after.style.display ="none";
    ErrorClear();
    resetForm()
})

 
