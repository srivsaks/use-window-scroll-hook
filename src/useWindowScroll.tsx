import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [state, setState] = useState({ x: window.scrollX, y: window.scrollY });

  const handleScroll = (e) => {
    console.log(e.target.documentElement.scrollTop);
    setState({
      x: e.target.documentElement.scrollLeft,
      y: e.target.documentElement.scrollTop
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return state;
};
export default useWindowScroll;
