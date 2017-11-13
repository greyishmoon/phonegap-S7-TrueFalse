
//----------- CORDOVA ONLOAD ---------------- //

// Cordova device event listener - will not work in browser
//document.addEventListener("deviceready", onDeviceReady, false);

// TEMP HTML ONLOAD
$( document ).ready( onDeviceReady );
//		alert("JS");
// Cordova device event triggered function
function onDeviceReady() {
	
    
    // Add other event listeners here if needed (pause, resume, backbutton etc)
	//set up click event handling for button
    $('#submitButton').on("click", getAnswer);
    
    // updates display    
	// updateDisplay();
	    
	console.log("device ready");
    
    alert("ONREADY");
}




function getAnswer() {
	
    result = random();

    if (result) {
        $("#responseText").text("Result is TRUE");
    } else {
        $("#responseText").text("Result is FALSE");
    }

	
}

function random() {
    return !Math.round(Math.random());
}
