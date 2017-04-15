import React from "react";
import Photo from "./Photo";
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
