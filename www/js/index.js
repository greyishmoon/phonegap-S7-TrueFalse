
//----------- CORDOVA ONLOAD ---------------- //

// Cordova device event listener - will not work in browser
document.addEventListener("deviceready", onDeviceReady, false);
		
// Cordova device event triggered function
function onDeviceReady() {
	
	// Add other event listeners here if needed (pause, resume, backbutton etc)
	//set up click event handling for button
  	$('#submitButton').on("click", getAnswer);
	
    // updates display    
	// updateDisplay();
	    
	console.log("device ready");
}


function getAnswer() {
    
    result = random();
    $("#responseText").text("Result was: " + result);
    
    if (random()) {
        $("#responseText").text("TRUE");
    } else {
        $("#responseText").text("FALSE");
    }
	
	
	
}

function random() {
    return !Math.round(Math.random());
    }
}