function saveInput() { // Save Input in local storage
    
    var usr = document.forms["input"]["username"].value;
    var nat = document.forms["input"]["country"].value;
    
    var gen = document.querySelector('input[name=gender]:checked').value;
   
    var id = gen + (new Date()).getTime(); // Create id for user based on time in milliseconds from 01/01/1970

    var user = { //Create an object named user from input
        name: usr, 
        nationality: nat,
        gender: gen
    }

    localStorage.setItem(id, JSON.stringify(user)); // Store object as string with JSON
}

function resetAnswers() { //Resets the radio buttons
    var answer = document.getElementsByName("gender");
    
    for(var i=0;i<answer.length;i++) {
        answer[i].checked = false;
    }

}