//THE LOGIN FORM
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//THE LOGIN INFO
var user = document.getElementById("uname");
var password = document.getElementById("psw");
var userinfo  = document.getElementById("usernameandpassword");
var input = document.getElementById("myInput");
var lbtn = document.getElementsByClassName("Loginbtn");
function userkey (){
    userinfo.innerHTML = "<p>Username: " + user.value + "<br>Password: " + password.value + "</p>";
    input.style.display = "none";
    lbtn.style.display = "none"
    
    
    
    
}






