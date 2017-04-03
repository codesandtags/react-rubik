// dependencies
import React from "react";
import GoogleChartsLoader from "./GoogleChartsLoader";
// styles
import "./PieChart.scss";

export default class PieChart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    GoogleChartsLoader
      .getLoader()
      .then(() => {
        debugger;
        google.charts.setOnLoadCallback(this.drawPieChart());
      });
  }

  drawPieChart() {
    // Create the data table.
    debugger;
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
      'title': 'How Much Pizza I Ate Last Night',
      'width': 400,
      'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById(this.props.name));
    chart.draw(data, options);
    debugger;
  }

  render() {
    return (
      <div className="">
        <div id={this.props.name}></div>
      </div>
    );
  }
}


