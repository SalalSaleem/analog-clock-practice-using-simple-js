function seconds(){
    var seconds = document.getElementById("seconds");
  setInterval(function() {
    seconds.style.transform += "rotate(6deg)";
  }, 1000);
}

seconds()    


function minutes(){
    var minutes = document.getElementById("minutes");
  setInterval(function() {
    minutes.style.transform += "rotate(5deg)";
  }, 60000);
}

minutes() 

function hours(){
    var hours = document.getElementById("hours");
  setInterval(function() {
    hours.style.transform += "rotate(31deg)";
  }, 3600000);
}

hours() 


