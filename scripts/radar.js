/* GCDS Colors */
const gcdsColors = { 
  gcdsColorWhite: '#FFFFFF',
  gcdsColorBlue100: '#D7E5F5',
  gcdsColorBlue500: '#6584A6',
  gcdsColorBlue700: '#33465c',
  gcdsColorBlue800: '#2b4380',
  gcdsColorBlue850: '#0535d2',
  gcdsColorGreen100: '#E6F6EC',
  gcdsColorGreen500: '#289F58',
  gcdsColorGreen700: '#03662A',
}

/*
 * Function: buildRadar
 * Purpose:  builds a radar chart with the given data
 * in:       the data to build with
*/
function buildRadar(currentData){
  anychart.onDocumentReady(function () {
  
          // create a data set
          // var chartData = {
          // header: ['#', 'Robert Lewandowski', 'Cristiano Ronaldo', 'Lionel Messi'],
          //   rows: [
          //     ['2017', 33, 19, 40],
          //     ['2018', 24, 36, 34],
          //     ['2019', 31, 17, 34],
          //     ['2020', 32, 33, 19],
          //     ['2021', 43, 25, 24],
          //     ['2022', 29, 11, 12]
          //   ]
          // };
          // create a radar chart
    let chart = anychart.radar();
    chart.palette([gcdsColors.gcdsColorBlue850, gcdsColors.gcdsColorGreen500, gcdsColors.gcdsColorGreen500]);
    console.log(currentData) 
    let currentState = chart.line(currentData).name('Current State');
  
    let futureState = chart.line([
      {x: 'Collaborate', value: 150},
      {x: 'Create', value: 150},
      {x: 'Compete', value: 150},
      {x: 'Control', value: 150},
    ]).name('Future State');
    
    currentState.markers().enabled(true);
    currentState.markers().size(5);
    futureState.markers().enabled(true);
    futureState.markers().size(5);
    
    chart.legend().enabled(true);
    chart.legend().position('bottom');
    chart.legend().padding(25);
    
    // Y axis
    chart.yAxis().ticks().stroke('#000000');
    chart.yScale().minimum(0).maximumGap(0.1).ticks().interval(50);

    chart.title("Competing Values Framework - Culture Profile Visualizer");

    const container = document.getElementById('container');
    container.style.display = 'block';
    container.style.height = '750px';
    chart.container('container');
    chart.draw();

  });
}

