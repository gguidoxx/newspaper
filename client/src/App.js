import Noticias from "./components/Noticias/Noticias";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getNews } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import img from "./assets/twitter-card.jpg";
import Pager from "./components/Paginado/Paginado";
import Nav from "./components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.noticias);
  const page = useSelector((state) => state.pages);
  //const [filter, setFilter] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (number) => {
    setCurrentPage(number);
  };
  const videosPerPage = 10,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentProducts = news.slice(indexOfFirstVideo, indexOfLastVideo);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className="dark:text-orange-50 bg-neutral-100 dark:bg-neutral-800 min-h-screen">
      <Nav />
      <div className="grid grid-cols-1 gap-4 pt-24 m-auto max-w-7xl ">
        <div className="m-auto">
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={news.length}
          />
        </div>
        {currentProducts?.map((e) => {
          return (
            <Noticias
              image={e.image == null ? img : e.image}
              title={e.title}
              description={e.description}
              url={e.url}
              source={e.name}
              author={e.author}
            />
          );
        })}
        <div className="m-auto mb-9">
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={news.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
