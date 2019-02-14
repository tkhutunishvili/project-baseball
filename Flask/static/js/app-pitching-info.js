//build chart
var url = `/pitching_info`;
console.log("Url", url);

//can double tap to isolate a singular season
//might consider making a histogram

    d3.json(url).then(function(data){
        console.log("data",data);

        var trace1 = {
            x: data.IP_2016,
            y: data.Wins_2016,
            mode: 'markers+text',
            type: 'scatter',
            name: '2016 Season',
            text: data.Teams,
            textposition: 'top center',
            textfont: {
              family:  'Raleway, sans-serif'
            },
            marker: { size: 12 }
          };

          var trace2 = {
            x: data.IP_2017,
            y: data.Wins_2017,
            mode: 'markers+text',
            type: 'scatter',
            name: '2017 Season',
            text: data.Teams,
            textfont : {
              family:'Times New Roman'
            },
            textposition: 'bottom center',
            marker: { size: 12 }
          };

          var trace3 = {
            x: data.IP_2018,
            y: data.Wins_2018,
            mode: 'markers+text',
            type: 'scatter',
            name: '2018 Season',
            text: data.Teams,
            textfont : {
              family:'Times New Roman'
            },
            textposition: 'bottom center',
            marker: { size: 12 }
          };
          
        
          var data = [trace1, trace2, trace3];


          var layout = {
            title: {
              text:'Innings Thrown by Starting Pitchers vs. Team Wins',
              font: {
                family: 'Courier New, monospace',
                size: 30
              },
            xaxis: {
              title: {
                text: 'Number of Innings Thrown by Starting Pitchers',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
              range: [300,1200]
            },
            yaxis: {
              title: {
                text: 'Number of Team Wins',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
              range: [40,115]
            },
            legend: {
              y: 0.5,
              yf: 'paper',
              font: {
                family: 'Arial, sans-serif',
                size: 22,
                color: 'grey',
              }
            }
          }
        };
        
          Plotly.newPlot('scatter', data, layout)

    });

//Chart.js Bar Chart
//creating a bar chart for 2016 season


d3.json(url).then(function(bardata){
  console.log("data",bardata);
  //

console.log(Chart.defaults.global.title.display)
Chart.defaults.global.title.display = true;
  console.log('innings', bardata.IP_2016)
  var ctx = document.getElementById("canvas").getContext('2d');
  var myBarChart = new Chart(ctx, {
     type: 'bar',
     labels: "Innings Thrown",
     data: {
       labels: bardata.Team,
       datasets: [{
         data: bardata.IP_2016,
         backgroundColor:'blue',
        borderColor: 'white'
       }]
     },
     options: {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: '2016: Number of Innings Thrown'
            },
              ticks: {
                  beginAtZero: true
              }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Team'
            },
            barPercentage: 0.75
          }]
      },
  
  }
})});

d3.json(url).then(function(bardata){
  console.log("data",bardata);
  //

console.log(Chart.defaults.global.title.display)
Chart.defaults.global.title.display = true;
  console.log('innings', bardata.IP_2018)
  var ctx2 = document.getElementById("canvas2").getContext('2d');
  var myBarChart = new Chart(ctx2, {
     type: 'bar',
     labels: "Innings Thrown",
     data: {
       labels: bardata.Team,
       datasets: [{
         data: bardata.IP_2018,
         backgroundColor:'green',
        borderColor: 'white'
       }]
     },
     options: {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: '2018: Number of Innings Thrown'
            },
              ticks: {
                  beginAtZero: true
              }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Team'
            },
            barPercentage: 0.75
          }]
      },
  
  }
})});