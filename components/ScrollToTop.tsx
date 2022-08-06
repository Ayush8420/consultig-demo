import { FC, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: FC = () => {
  const [show, setShow] = useState(false);

  const scrollCb = () => {
    setShow(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollCb);
    return () => window.removeEventListener("scroll", scrollCb);
  });

  
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <style jsx>{`
        .scroll {
          color: #fff7;
          position: fixed;
          bottom: 30px;
          right: 30px;
          height: 50px;
          width: 50px;
          background: #0007;
          display: grid;
          place-items: center;
          font-size: 20px;
          opacity: 0;
          visibility: hidden;
          cursor: pointer;
          transition: opacity 0.2s,background .5s, color 0.5s;
          z-index: 10;
        }

        .scroll:hover {
          color: #fff;
          background: #000;
        }

        .scroll.show {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      <div className={`scroll ${show ? "show" : ""}`} onClick={scroll}>
        <FaArrowUp />
      </div>
    </>
  );
};

export default ScrollToTop;
