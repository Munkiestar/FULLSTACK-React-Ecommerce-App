import "./index.css";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <h1>hello</h1>
    </div>
  );
}

export default App;
