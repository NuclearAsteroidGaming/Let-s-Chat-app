


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

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();