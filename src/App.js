import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Register2 from "./components/Register2";
import Register3 from "./components/Register3";
import Pagenotfound from "./components/Pagenotfound";
import TopCandidates from "./components/TopCandidates";
import Company from "./components/Company";
import data from './data.json';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="company" element={<Company />} />
          <Route path="topcandidates" element={<TopCandidates data={data} />} />
          <Route path="register" element={<Register />} />
          <Route path="billingdetails" element={<Register2 />} />
          <Route path="additionalInfo" element={<Register3 />} />
          <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
