import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFooter from "./component/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyFooter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
