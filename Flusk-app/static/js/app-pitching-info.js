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
            xaxis: {
              range: [300,1200]
            },
            yaxis: {
              range: [40,115]
            },
            legend: {
              y: 0.5,
              yref: 'paper',
              font: {
                family: 'Arial, sans-serif',
                size: 20,
                color: 'grey',
              }
            },
            title:'Innings Thrown by Starting Pitchers vs Wins'
          };
        
          Plotly.newPlot('scatter', data, layout)


          //trying to get tooltip going 

          myPlot.on('plotly_hover', function(data){
            var infotext = data.points.map(function(d){
              return (d.data.Teams+': x= '+d.x+', y= '+d.y.toPrecision(3));
            });
        
            hoverInfo.innerHTML = infotext.join('');
        })
         .on('plotly_unhover', function(data){
            hoverInfo.innerHTML = '';
        });

    });

