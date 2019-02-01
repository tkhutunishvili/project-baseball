//Build Chart
function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var url = '/samples-win_loss_results/' + sample;
  console.log("Url", url);
    // @TODO: Build a Bubble Chart using the sample data
    d3.json(url).then(function(data) { 
        console.log("data", data);
    // top 10 salary by player,
      
      var trace = [{
      x: data.abbr,
      y: data.wins,
      text: data.team_names,
      mode: 'markers',
      name: "Greek",
      type: "bar"
      }];
      var layout2 = {
        title: "Bar Chart",
        showlegend: false
      };
      Plotly.newPlot("plot", trace, layout2);
    })
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample years-bwar-bat to populate the select options
  d3.json("/years-bwar-bat").then((sampleNames) => {
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
