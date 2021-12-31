const vehicles=["bus", "cars/redcar","cars/browncar","cars/greencar","cars/orangecar","cars/purplecar", "police", "truck"]

function createVehicle(index){
    if (index<=0){
        return;
    }
    var newVehicle = document.createElement("img");
    newVehicle.src="assets/"+vehicles[Math.floor(Math.random()*vehicles.length)] + ".png";
    newVehicle.className="vehicleright";
    newVehicle.style.top = "0px";
    document.getElementById("car_line").append(newVehicle);
    setTimeout(() => {  createVehicle(index-1) }, 1500);
}
setTimeout(() => {  createVehicle(100) }, 1500);

//Horn Sound
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        var audio = new Audio('assets/carhorn.wav');
        audio.play();
    }
}


setInterval(function() {
    var vehiclesright= document.getElementsByClassName("vehicleright");
    var vehiclesleft= document.getElementsByClassName("vehicleleft");
    //Checks when the vehicles reach the right
    for (let i=0; i<vehiclesright.length; i++){
        const rect = vehiclesright[i].getBoundingClientRect();
        if (window.innerWidth - rect.right<-100){
            
            const height=vehiclesright[i].style.top 
            vehiclesright[i].style.top = (parseInt(height) + 60) + 'px';
            vehiclesright[i].className = "vehicleleft";
            
        }
    }

    for (let i=0; i<vehiclesleft.length; i++){
        const rect = vehiclesleft[i].getBoundingClientRect();
        if (rect.right<-5){
            
            const height=vehiclesleft[i].style.top;
            vehiclesleft[i].style.top = (parseInt(height) + 110 ) + 'px';
            vehiclesleft[i].className = "vehicleright";
        }
    }

}, 200);