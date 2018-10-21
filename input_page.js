function saveInput() { // Save Input in local storage

    var username = document.forms["input"]["username"].value;
    var country = document.forms["input"]["country"].value;
    
    // Assign radio button data to variable userGender
    if (document.getElementById("female").checked) {
        var userGender = "female";
    } else if (document.getElementById("male").checked){
        var userGender = "male";
    } else {
        var userGender = "";
    }

    if (username !== "" && country !== "" && userGender !== "") { // Check if everything is filled out
        
        var id = userGender + (new Date()).getTime(); // Create id for user based on time in milliseconds from 01/01/1970

        var user = { //Create an object named user from input
            name: username, 
            nationality: country,
            gender: userGender
        }

        localStorage.setItem(id, JSON.stringify(user)); // Store object as string with JSON

    } else { // Message if value is missing
        alert("Please fill out the complete form!")
    }
}

function resetAnswers() { //Resets the radio buttons
    var answer = document.getElementsByName("gender");
    
    for(var i=0;i<answer.length;i++) {
        answer[i].checked = false;
    }

}