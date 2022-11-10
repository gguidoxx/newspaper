import Noticias from "./components/Noticias";
import axios from "axios";
import React, { useEffect } from "react";
import { getNews } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.noticias);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <>
      <nav className="p-4 h-14 fixed z-10 w-full text-center bg-red-900 text-slate-200">
        <div className="float-left ml-8">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Volver arriba
          </button>
        </div>
        <div className="">Diario SinNombre</div>
      </nav>
      <div className="grid grid-cols-1 gap-4 max-w-7xl m-auto pt-24">
        {news?.map((e) => {
          return (
            <Noticias
              image={e.image}
              title={e.title}
              description={e.description}
              url={e.url}
              source={e.name}
              author={e.author}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
