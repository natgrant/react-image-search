import React from "react";
import "./ImageList.scss";

export default function ImageList(props) {
  const images = props.images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
}
