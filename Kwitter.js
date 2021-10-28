function adduser() {
    name_user = document.getElementById("login_name").value;
    localStorage.setItem("Name of the User = " , name_user);
    window.location= "kwitter_room.html"; 
}