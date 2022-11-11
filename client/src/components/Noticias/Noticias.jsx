import React from "react";
import axios from "axios";

function Noticias({ image, title, description, url, source, author }) {
  return (
    <div className="border border-gray-500 shadow-md shadow-white ">
      <div className="flex flex-row ">
        <img src={image} width="400px" className="mr-4 min-w-400" />
        <div>
          <h3 className="text-lg font-bold underline underline-offset-8">
            {title}
          </h3>
          <p className="font-NYTB">{description} </p>
          <a
            href={url}
            target="_blank"
            className="text-sky-800 dark:text-sky-500"
          >
            Ver más
          </a>
          <p className="">{author}</p>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
