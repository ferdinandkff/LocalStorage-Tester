function saveInput() { // Save Input in local storage

    // Calculate Age
    var birthDay = document.getElementById("day").value;
    var birthMonth = document.getElementById("month").value;
    var birthYear = document.getElementById("year").value;

    var birthDate = new Date(birthYear + "-" + birthMonth + "-" + birthDay)

    var ageDiff = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDiff);

    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    var usr = document.forms["input"]["username"].value;
    var nat = document.getElementById("country").value;
    var gen = document.querySelector('input[name=gender]:checked').value;

    var id = gen + (new Date()).getTime(); // Create id for user based on time in milliseconds from 01/01/1970

    var user = { //Create an object named user from input
        name: usr, 
        age: age,
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