// Dependencies
import React from "react";
import PropTypes from "prop-types";
// Styles
import "./photo.scss";

export default class Photo extends React.Component {
  render() {
    const image = this.props.image;

    return (
      <div className="rubik-photo">
        <figure>
          <img src={image.url} alt={image.title}/>
          <figcaption>{image.description}</figcaption>
        </figure>
      </div>
    );
  }
}

Photo.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};
