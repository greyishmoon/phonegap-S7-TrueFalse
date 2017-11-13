
//----------- CORDOVA ONLOAD ---------------- //

// Cordova device event listener - will not work in browser
document.addEventListener("deviceready", onDeviceReady, false);

// TEMP HTML ONLOAD
//$( document ).ready( onDeviceReady );

// Cordova device event triggered function
function onDeviceReady() {
	
	//set up click event handling for button
    $('#submitButton').on("click", getAnswer);
    
    //start watching for shake gestures
    shake.startWatch(getAnswer);
	    
	console.log("device ready");
    
    alert("ONREADY");
}


function getAnswer() {
	
    result = random();

    if (result) {
        $("#responseText").text("Result is TRUE");
        
        // Beep once!
        navigator.notification.beep(1);
        
        //vibrate for 1000 milliseconds
        navigator.vibrate(1000);
    } else {
        $("#responseText").text("Result is FALSE");
        
        // Beep twice!
        navigator.notification.beep(2);
        
        //vibrate for 200 milliseconds
        //wait for 300 milliseconds
        //wait for 500 milliseconds
        navigator.vibrate([200, 300, 200, 300, 500]);
    }	
}


function random() {
    return !Math.round(Math.random());
}
