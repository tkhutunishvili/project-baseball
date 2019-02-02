

function buildCharts(sample) {

    // @TODO: Use `d3.json` to fetch the sample data for the plots
    var url = '/samples-team-batting/' + sample;
    console.log("Url", url);
      // @TODO: Build a Bubble Chart using the sample data
      d3.json(url).then(function(data) { 
          console.log("data", data);
      // top 10 salary by player,
        
        var trace = [{
        x: data.Seasons,
        y: data.SBs,
        text: data.Teams,
        type: "bar",
       // mode: 'markers',
        marker: {
          size: data.SBs,
        color: data.Seasons,
        }
        }];
        var layout2 = {
          title: "Bases Stolen",
          showlegend: false
        };
        Plotly.newPlot("myChart", trace, layout2);
      })
  }

//let arrObj = [];
//d3.csv('team_results_df.csv', function (data, index) {

  
//  if(data.Team === 'Tigers') {
//  arrObj.push({x:data.Season,y:data.SB})
//   console.log(data.Season, data.SB)
//  }

//});
//console.log(arrObj);
//(function(){
//  setTimeout(function(){
//    console.log(arrObj)
//  },5000)
//})()

//var chartData = {
//  dataset: {
//    data: arrObj
//  }
//}

//var ctx = document.getElementById('myChart');

// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//           label: '# of Votes',
// //          data: [{x:1,y:1},{x:2,y:1},{x:3,y:3}],
//           data: [{x:datat.Seasons,y:datat.SBs}],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255,99,132,1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero:true
//               }
//           }]
//       }
//   }
// })



function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample years-bwar-bat to populate the select options
    d3.json("/team-team_batting").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
  //    buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
  //  buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  