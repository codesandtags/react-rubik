// Dependencies
import React from "react";
// Components
import Counter from "./../../components/Counter/Counter";
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
        <article>
          <h2>Counter</h2>
          <Counter startNumber="5"/>
          <Counter startNumber="250" iconText="❤️"/>
          <Counter iconText="🐶"/>
          <h3>Code</h3>
          <pre>
              <code className="hljs html">
                &lt;Counter startNumber=&quot;5&quot;/&gt;<br/>
                &lt;Counter startNumber=&quot;250&quot; iconText=&quot;❤️&quot;/&gt;
              </code>
          </pre>
        </article>
      </section>
    )
  }
}
