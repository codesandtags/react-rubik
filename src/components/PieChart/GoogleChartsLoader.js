import loadjs from "loadjs";

const GoogleChartsLoader = {

  getLoader: function() {
    return new Promise((resolve) => {
      if (window.google && window.google.charts) {
        debugger;
        resolve();
      } else {
        return loadjs('https://www.gstatic.com/charts/loader.js', {
          success: () => {
            window.google.charts.load('current', {'packages': ['corechart']});
            window.google.charts.setOnLoadCallback(() => {
              console.log('Chart Loaded with Google Visualization');
              debugger;
              resolve();
            });
          }
        });
      }
    });
  }
};

export default GoogleChartsLoader;
