const firebaseConfig = {
      apiKey: "AIzaSyCde1i2MOyKruHFP_GyjW0tI1KcKRRaIRQ",
      authDomain: "kwitterdatabase-15c8f.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-15c8f-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-15c8f",
      storageBucket: "kwitterdatabase-15c8f.appspot.com",
      messagingSenderId: "798217709263",
      appId: "1:798217709263:web:f58b10f56e93a0afe2f9ba"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    //Initialize Firebase 
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"           
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"; 
    }

    function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"           
      });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}