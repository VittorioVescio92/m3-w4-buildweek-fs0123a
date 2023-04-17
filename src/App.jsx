import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./component/MainComponent";
import MyNavbar from "./component/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
