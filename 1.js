function RandomMessage() {
  var messages = ["Hello !", "Welcome to my webpage", "Have a good day!","Enjoy your life!", "Thanks for visit"];
var i = Math.floor(Math.random() * messages.length);
 var m = messages[i];
    
document.getElementById("message").innerHTML = m; }
  