import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ol>
          <li>What is React Rubik?</li>
          <li>Components
            <ul>
              <li><a href="#">Counter</a></li>
            </ul>
          </li>
        </ol>
      </nav>
    );
  }
}
