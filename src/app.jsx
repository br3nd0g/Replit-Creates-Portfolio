import '/src/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/main";
import Overview from "/src/overview/overview";
import Projects from "/src/projects/projects";
import Layout from "/src/layout";
import FourOhFour from "/src/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="overview" element={<Overview />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}