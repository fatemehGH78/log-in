



// // code for inputs>>>>>>>>>>>>>>>>
// var email = document.forms["form"]["email"];
// var password = document.forms["form"]["password"];

// var email_error = document.getElementById("email_error");
// var pass_error = document.getElementById("pass_error");

// /``/ /var email = document.getElementById("email").value;
// // var password = document.getElementById("pass").value;``

// email.addEventlistener("textInput", email_Verify);
// password.addEventlistener("textInput", pass_Verify);

// function validate() {
//   if (email.value.length< 9) {
//     email.style.border = "1px solid red";
//     email_error.style.display = "block";
//     email.focus();
//     return false;
//   }

//   if (password.value.length< 6) {
//     password.style.border = "1px solid red";
//     pass_error.style.display = "block";
//     password.focus();
//     return false;
//   }
// }

// function email_Verify() {
//   if (email.value.length >= 8) {
//     email.style.border = "1px solid silver" 
//     email_error.style.display = "none";
//     return true;
//   }
// }
// function pass_Verify() {
//   if (password.value.length >= 5) {
//     password.style.border = "1px solid silver";
//     pass_error.style.display = "none";
//     return true;
//   }
// }




// *******************************************************************

// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// myInput.onfocus = function() {
//     document.getElementById("message").style.display = "block";
//   }

//   myInput.onblur = function() {
//     document.getElementById("message").style.display = "none";
//   }

  
//   myInput.onkeyup = function() {
//     var lowerCaseLetters = /[a-z]/g;
//     if(myInput.value.match(lowerCaseLetters)) {
//       letter.classList.remove("invalid");
//       letter.classList.add("valid");
//     } else {
//       letter.classList.remove("valid");
//       letter.classList.add("invalid");
//   }

//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }
  

//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }

// //  