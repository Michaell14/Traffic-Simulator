const vehicles=["bus", "cars/redcar","cars/browncar","cars/greencar","cars/orangecar","cars/purplecar", "police", "truck"]

function createVehicle(index){
    if (index<=0){
        return;
    }
    var newVehicle = document.createElement("img");
    newVehicle.src="assets/"+vehicles[Math.floor(Math.random()*vehicles.length)] + ".png";
    newVehicle.className="vehicleright";
    newVehicle.style.top = "85px";
    document.getElementById("car_line").append(newVehicle);

    setTimeout(() => {  createVehicle(index-1) }, calcTime());
}
setTimeout(() => {  createVehicle(20) }, calcTime());

//Horn Sound
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        var audio = new Audio('assets/carhorn.wav');
        audio.play();
    }
}

function calcTime(){
  const speed =window.innerWidth / 30;
  const time = 64/speed* 1000;
  return time;
}


setInterval(function() {
    var vehiclesright= document.getElementsByClassName("vehicleright");
    var vehiclesleft= document.getElementsByClassName("vehicleleft");
    //Checks when the vehicles reach the right
    for (let i=0; i<vehiclesright.length; i++){
        const rect = vehiclesright[i].getBoundingClientRect();
        if (window.innerWidth - rect.right<-64){
            
            const height=vehiclesright[i].style.top 
            vehiclesright[i].style.top = (parseInt(height) + 60) + 'px';
            vehiclesright[i].className = "vehicleleft";
            
        }
    }

    for (let i=0; i<vehiclesleft.length; i++){
        const rect = vehiclesleft[i].getBoundingClientRect();
        if (rect.right<0){
            
            const height=vehiclesleft[i].style.top;
            vehiclesleft[i].style.top = (parseInt(height) + 110 ) + 'px';
            vehiclesleft[i].className = "vehicleright";
        }
    }

}, 200);

//Timer
T = {} ;
T.timerDiv = document.getElementById('timer');

function displayTimer() {
  // initilized all local variables:
  var hours='00', minutes='00', seconds='00', time = '', timeNow = new Date().getTime();

  T.difference = timeNow - T.timerStarted;

  // seconds
  if(T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000);
    if (seconds > 60) {
      seconds = seconds % 60;
    }
    if(seconds < 10) {
      seconds = '0'+String(seconds);
    }
  }

  // minutes
  if(T.difference > 60000) {
    minutes = Math.floor(T.difference/60000);
    if (minutes > 60) {
      minutes = minutes % 60;
    }
    if(minutes < 10) {
      minutes = '0'+String(minutes);
    }
  }

  // hours
  if(T.difference > 3600000) {
    hours = Math.floor(T.difference/3600000);

    if(hours < 10) {
      hours = '0'+String(hours);
    }
  }

  time  =  hours   + ':';
  time += minutes + ':';
  time += seconds;

  T.timerDiv.innerHTML = time;
}

// save start time
T.timerStarted = new Date().getTime()

if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
}
// update timer periodically
T.timerInterval = setInterval(function() {
    displayTimer()
}, 100);

