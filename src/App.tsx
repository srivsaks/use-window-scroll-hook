import "./styles.css";
import useWindowScroll from "./useWindowScroll";

export default function App() {
  const state = useWindowScroll();

  return (
    <div className="App" style={{ height: "3000px", width: "3000px" }}>
      <div style={{ position: "fixed" }}>
        {state.x}
        {"    "}
        {state.y}
      </div>
    </div>
  );
}
