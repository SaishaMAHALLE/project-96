const firebaseConfig = {
    apiKey: "AIzaSyCFc28AEpLIn4J3rV8pzrRi_pqO4wnPNSI",
    authDomain: "practise-ed3f0.firebaseapp.com",
    databaseURL: "https://practise-ed3f0-default-rtdb.firebaseio.com",
    projectId: "practise-ed3f0",
    storageBucket: "practise-ed3f0.appspot.com",
    messagingSenderId: "400804951505",
    appId: "1:400804951505:web:a2a5226997ed141ff25cf0",
    measurementId: "G-KL8DVXFDRK"
  };
  
  
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room name - " +  Room_names);
      row = "<div class= 'room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      
    });});}
getData();

function add_room_name() {
  Room_names = document.getElementById("room_name").value
  firebase.database().ref("/").child(Room_names).update({
        purpose: "Add Room Name "
  });

  localStorage.setItem("room_names",Room_names);
  window.location = "kwitter_message.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name ", name);
  window.location = "kwitter_message.html";

}

document.getElementById("login_name").innerHTML="welcome ",name_user;
