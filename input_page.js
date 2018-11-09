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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

class ChartData {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    drawPieChart() {
        let valueArr = [];

        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) != "Users") {
                let usr = JSON.parse(localStorage.getItem(localStorage.key(i)));
                valueArr.push(usr[this.name]);
            }
        }

        // Create object listing the number of times each country occurs
        var numberOfValue = {};

        valueArr.forEach(function(n) {  // Creates a property for each country with its amount as the value
            numberOfValue[n] = (numberOfValue[n] || 0) + 1; 
        });

        var rankedValues = []; // Create 2-dimensional array from object numberOfCountry
        
        for(let x in numberOfValue){
            rankedValues.push([x, numberOfValue[x]])
        }

        rankedValues.sort(function(a,b){ // Sort array descending by the amount a country occurs
            return b[1] - a[1];
        }); 

        // We just want to display the top 5 recurring countries in the dataset, therefore we will further adjust rankedCntrs
        var otherValues = 0; // Empty variable for the total amount of countries outside the top five

        for(let i=5; i<rankedValues.length; i++) { // Start from 5 and loop through rankedCntrs and add values to otherCntrs
            otherValues += rankedValues[i][1]; // We only want elements from the second column
        }
  
        // Adjusting rankedCntrs to go into pie chart
        rankedValues.splice(4,rankedValues.length-5); // Remove every element but the first five
        rankedValues.unshift(['Name','Number']) // Add labels
        rankedValues.push(['Other',otherValues]); // Add total of other countries
    
        var data = google.visualization.arrayToDataTable(rankedValues); // Make pie chart

        var options = {
            /* title: 'This is where your fellow students are from:', */
        };
    
        var chart = new google.visualization.PieChart(document.getElementById(this.id)); // Reference to pie chart in .html file
        chart.draw(data, options);   
    }

    drawBarChart() {
        let valueArr = []

        for (let i=0; i<localStorage.length; i++) {
            if (localStorage.key(i) != "Users") {
                var usr = JSON.parse(localStorage.getItem(localStorage.key(i)));
                valueArr.push(usr[this.name]);
            }
        }

        var numberOfValue = {};

        valueArr.forEach(function(n) {  // Creates a property for each country with its amount as the value
            numberOfValue[n] = (numberOfValue[n] || 0) + 1; 
        });

        var rankedValues = []; // Create 2-dimensional array from object numberOfCountry
        
        for(let x in numberOfValue){
            rankedValues.push([x, numberOfValue[x]])
        }

        rankedValues.sort(function(a,b){ // Sort array descending by the amount a country occurs
            return b[1] - a[1];
        });

        rankedValues.unshift(['Name','Number']) // Add labels, as required by Google Charts

        var data = google.visualization.arrayToDataTable(rankedValues); // Make pie chart

        var options = {
            /* title: 'This is where your fellow students are from:', */
        };
    
        var chart = new google.visualization.BarChart(document.getElementById(this.id)); // Reference to bar chart in .html file
        chart.draw(data, options);
    }
}

var countries = new ChartData('nationality', 'countryChart');
var genders = new ChartData('gender','genderChart');
var districts = new ChartData('district','cphChart')
var pizzaPasta = new ChartData('food','pizzaChart');
var relStatus = new ChartData('status','statusChart');
var beerWine = new ChartData('drinks','drinksChart');

function drawCharts() {
    countries.drawPieChart();
    genders.drawPieChart();
    districts.drawBarChart();
    /* pizzaPasta.drawPieChart(); */
    relStatus.drawPieChart();
    /* beerWine.drawPieChart(); */
}