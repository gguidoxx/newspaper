import React from "react";
import axios from "axios";

function Noticias({ image, title, description, url, source, author }) {
  return (
    <div className="border border-red-600 ">
      <div className=" flex flex-row ">
        <img src={image} width="400px" className="mr-4"/>
        <div>
          <h3 className="text-lg font-bold underline-offset-8 underline">
            {title}
          </h3>
          <p>
            {description}{" "}
            <a href={url} target="_blank">
              Ver más
            </a>
          </p>

          <p>{source}</p>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
