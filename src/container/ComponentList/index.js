// Dependencies
import React from "react";
// Components
import Counter from "./../../components/Counter/Counter";
import Gallery from "./../../components/Gallery";
// JS Libraries
import hljs from "highlightjs/highlight.pack.min";
// Styles
import "highlightjs/styles/tomorrow-night-eighties.css";

export default class ComponentList extends React.Component {
  componentDidMount() {
    const $blocks = document.querySelectorAll('pre code');
    $blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <section>
        <h2>Components</h2>
        <article>
          <h3><a name="gallery">Gallery</a></h3>
          <Gallery images={
            [{title: 'one', url: 'https://unsplash.it/300/300?image=23', description: 'image one'},
              {title: 'two', url: 'https://unsplash.it/300/300?image=50', description: 'image two'},
              {title: 'three', url: 'https://unsplash.it/300/300?image=30', description: 'image three'},
              {title: 'four', url: 'https://unsplash.it/300/300?image=876', description: 'image four'},
              {title: 'five', url: 'https://unsplash.it/300/300?image=102', description: 'image five'},
              {title: 'six', url: 'https://unsplash.it/300/300?image=415', description: 'image six'}
            ]
          }/>
          <h4>Code</h4>
          <pre>
              <code className="hljs html">
                &lt;Gallery images='list of object images' /&gt;
              </code>
          </pre>
        </article>

        <article>
          <h3><a name="counter">Counter</a></h3>
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
      </section>
    )
  }
}
