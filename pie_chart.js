// Load Google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw chart for nationalities
function drawChart() {

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

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

