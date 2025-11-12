import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContainerExamples from "./pages/ContainerExamples";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/container-examples" element={<ContainerExamples />} />
    </Routes>
  );
}

export default App;
