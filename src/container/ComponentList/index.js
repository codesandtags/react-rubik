// Dependencies
import React from "react";
// Components
import Counter from "./../../components/Counter/Counter";
import PieChart from "./../../components/PieChart/PieChart";
// JS Libraries
import hljs from "highlightjs/highlight.pack.min";
// Styles
import "highlightjs/styles/tomorrow-night-eighties.css";

export default class ComponentList extends React.Component {
  componentDidMount() {
    const $blocks = document.querySelectorAll('pre code');
    $blocks.forEach((block) => {
      console.log(block);
      hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <section>
        <h2>Components</h2>

        <article>
          <h3>Counter</h3>
          <Counter startNumber="5"/>
          <Counter startNumber="250" iconText="❤️"/>
          <Counter iconText="🐶"/>
          <h4>Code</h4>
          <pre>
              <code className="hljs html">
                &lt;Counter startNumber=&quot;5&quot;/&gt;<br/>
                &lt;Counter startNumber=&quot;250&quot; iconText=&quot;❤️&quot;/&gt;
              </code>
          </pre>
        </article>

        <article>
          <h3>Pie Chart</h3>
          <PieChart name="pie1"/>
          <PieChart name="pie2"/>
          <h4>Code</h4>
          <pre>
              <code className="hljs html">
                // TODO
              </code>
          </pre>
        </article>
      </section>
    )
  }
}
