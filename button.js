var button = document.getElementById("bttn");
var reset = document.getElementById("clear");
var disp = document.getElementById("disp");

var startTime = 0;
var currTime = 0;
var timeDiff = 0;
var bpm = 0;
var count = 0;
var total = 0;
var output = 0;

button.onclick = function (){
    if(startTime == 0){
        startTime = new Date();          // Get date right when first click occurs
    }
    currTime = new Date();               // Get date when next click occurs
    timeDiff = currTime - startTime;     // BPM is found by: 60 / (currTime - startTime) e.g. if beat happens every second
                                         // currTime = 1, startTime = 0   =>  BPM = 60 bpm

    timeDiff /= 1000;                    // Get the time in seconds
    bpm = 60 / timeDiff;

    count++;
    total = total + bpm;
    output = total / count;              // Next, average out the bpm values calculated between clicks to get a more accurate bpm reading over time 

    if(bpm == Number.POSITIVE_INFINITY){ // Skip display for first click since it always resolves to infinity
        disp.innerHTML = "Start Tapping the Button Below";
    }else{
        disp.innerHTML = bpm.toFixed(0);
    }

    startTime = currTime;                // Increment startTime so that each click is relative to the last one
}   

reset.onclick = function (){
    disp.innerHTML = "---";
    startTime = 0;
    currTime = 0;
    timeDiff = 0;
    bpm = 0;
    count = 0;
    total = 0;
    ouptut = 0;
}