// Load Google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw chart for nationalities
function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Friends', 2],
    ['Eat', 2],
    ['TV', 2],
    ['Gym', 2],
    ['Sleep', 8]
  ]);

  var options = {
    title: 'This is where your fellow students are from:'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

