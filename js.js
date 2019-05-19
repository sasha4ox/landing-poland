var imgFlagU = document.getElementById("imgFlagU");
var startTime = Date.now();

var timer = setInterval(function(){
    var TimePassed = Date.now() - startTime;
    if (TimePassed >= 5000){
        clearInterval(timer);
        return;
    };
    changeOpacity(TimePassed);
}, 100 );


function changeOpacity(TimePassed){
    imgFlagU.style.opacity = (TimePassed/10000) + 0.6;
}