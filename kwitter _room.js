

var firebaseConfig = {
    apiKey: "AIzaSyABXuOb3ttMJS66Z28G8UApmeIECQBPY7Y",
  authDomain: "lets-chat-app-6513a.firebaseapp.com",
  databaseURL: "https://lets-chat-app-6513a-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-6513a",
  storageBucket: "lets-chat-app-6513a.appspot.com",
  messagingSenderId: "646928589980",
  appId: "1:646928589980:web:0786f1360a35489af33959",
  };

  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;

    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}