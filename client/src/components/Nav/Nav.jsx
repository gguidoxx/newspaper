import React from "react";

function Nav() {
  return (
    <nav className="fixed z-10 w-full h-16 p-4 text-center bg-neutral-200 dark:bg-neutral-900 dark:text-white text-slate-900">
      <div className="float-left ml-8 text-center">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Volver arriba
        </button>
      </div>
      <div className="float-right mr-8 text-center">by Guido Gutierrez</div>
      <div className="text-3xl font-black font-NYT">NotiApp</div>
    </nav>
  );
}

export default Nav;
