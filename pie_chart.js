// Load Google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawCountryChart);

// Draw chart for genders
function drawGenderChart() {

  let genderArr = [];

  for(let i=0; i<localStorage.length; i++){
    let usr = JSON.parse(localStorage.getItem(localStorage.key(i)));
    genderArr.push(usr.gender);
  }

  let nrFemales = 0;
  let nrMales = 0;

  for(let i=0; i<genderArr.length; i++){
    
    if(genderArr[i] == "female") {
      nrFemales += 1;
    }else if(genderArr[i] == "male") {
      nrMales += 1;
    }
  }

  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Number'],
    ['Female', nrFemales],
    ['Male', nrMales]
  ]);

  var options = {
    title: 'This is the gender ratio of your year:'
  };

  var chart = new google.visualization.PieChart(document.getElementById('genderChart'));

  chart.draw(data, options);
}

function drawCountryChart() {

  let countryArr = [];

  for(let i = 0; i < localStorage.length; i++) {
    let usr = JSON.parse(localStorage.getItem(localStorage.key(i)));
    countryArr.push(usr.nationality);
  }
  
  // Create object listing the number of times each country occurs
  var numberOfCountry = {};

  countryArr.forEach(function(n) {  // Creates a property for each country with its amount as the value
    numberOfCountry[n] = (numberOfCountry[n] || 0) + 1; 
  });

  var rankedCntrs = []; // Create 2-dimensional array from object numberOfCountry
  for(let x in numberOfCountry){
    rankedCntrs.push([x, numberOfCountry[x]])
  }

  rankedCntrs.sort(function(a,b){ // Sort array descending by the amount a country occurs
    return b[1] - a[1];
  }).unshift(["Country", "Number"]); // Add labels

  var data = google.visualization.arrayToDataTable(rankedCntrs); // Make pie chart of nationalities with the array rankedCntrs

  var options = {
    title: 'This is where your fellow students are from:'
  };
  
  var chart = new google.visualization.PieChart(document.getElementById('countryChart'));
  chart.draw(data, options);
}
