
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD-968gVaGXp_yIMFZhYyNbcAeAkFdy0ps",
      authDomain: "kwitter-c6d90.firebaseapp.com",
      databaseURL: "https://kwitter-c6d90-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6d90",
      storageBucket: "kwitter-c6d90.appspot.com",
      messagingSenderId: "555787117568",
      appId: "1:555787117568:web:b64ffaf3e33ceaf533e4e5"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

  function addRoom(){
room_name=document.getElementById("room_name").value ;

firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name_ "+Room_names);
      row="<div class= 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
   localStorage.removeItem("user_name");
   
   localStorage.removeItem("room_name");
window.location="index.html";
}