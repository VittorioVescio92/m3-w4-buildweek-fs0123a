import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Experiences from "./component/Experiences";
import Jobs from "./component/jobs/Jobs";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/experience" element={<Experiences />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
