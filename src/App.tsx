import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Photography from "./pages/Photography/Photography.tsx";
import Fitness from "./pages/Fitness/Fitness.tsx";
import Freelancer from "./pages/Freelancer/Freelancer.tsx";
import Lawyer from "./pages/Lawyer/Lawyer.tsx";
import ViewDemo from "./pages/ViewDemo/ViewDemo.tsx";
import Designer from "./pages/Designer/Designer.tsx";

const App = () => {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<ViewDemo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/lawyer" element={<Lawyer />} />
      </Routes>
    </div>
  );
};

export default App;
