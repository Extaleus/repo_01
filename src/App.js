import "./App.css";
import Header from "./components/Header";
import { Content } from "./components/content/Content";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
// master
// develop
// feature-1
// feature-2
// fix-1
