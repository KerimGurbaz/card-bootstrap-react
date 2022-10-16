import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, options, img }) => {
  const [showImage, setShowImage] = useState(true);
  console.log(showImage);

  return (
    <Container
      className="p-4 rounded-5 h-100 lang-card"
      style={{ background: "peachpuff" }}
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6 ">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item, index) => {
            return (
              <li className="h5 text-start" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
