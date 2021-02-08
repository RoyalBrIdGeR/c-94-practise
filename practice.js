
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBA6A2hMxh6WOwXGzBo59DrlWmUKR8kdxI",
    databaseURL:"https://kwitter-217bc-default-rtdb.firebaseio.com/",
    authDomain: "kwitter-217bc.firebaseapp.com",
    projectId: "kwitter-217bc",
    storageBucket: "kwitter-217bc.appspot.com",
    messagingSenderId: "786562617331",
    appId: "1:786562617331:web:0b5206c01c2d2bb4138c86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser() {

 user_name=document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({

 school:"Aarnav"

 });

  }

