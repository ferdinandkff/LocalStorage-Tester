// Load Google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw chart for nationalities
function drawChart() {

  let nrFemales = 60; // Insert retrieve method here
  let nrMales = 60;

  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Number'],
    ['Female', nrFemales],
    ['Male', nrMales,
  ]);

  var options = {
    title: 'This is the gender ratio of your year:'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

