// Dependencies
import React from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
// Styles
import "./gallery.scss";

export default class Gallery extends React.Component {
  render() {
    const images = this.props.images;

    return (
      <div className="rubik-gallery">
        {
          images.map((image, index) => {
            return <Photo image={image} key={index}/>
          })
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};
