import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import Formation from "./pages/Formation";
import Integration from "./pages/Integration";
import PricingPage from "./pages/PricingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ContainerExamples from "./pages/ContainerExamples";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/formation" element={<Formation />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/container-examples" element={<ContainerExamples />} />
    </Routes>
  );
}

export default App;
