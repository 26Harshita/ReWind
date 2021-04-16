import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


//SIGNIN


  function login()
  {
      var useremail = document.getElementById("email_field").value;
      var userpass = document.getElementById("password_field").value;
  
      firebase.auth().signInWithEmailAndPassword(useremail, userpass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error :" + errorMessage);
  
    });
  }
  
  
  
  logout()
  {
  firebase.auth().signOut();
  } 


  //SIGNUP

  function signup()
{
 var username = document.getElementById("name_field").value;
var useremail = document.getElementById("email_field").value;
var userpass = document.getElementById("password_field").value;

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}