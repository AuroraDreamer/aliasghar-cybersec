import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-forest text-cream font-sans overflow-x-hidden flex flex-col">
        {/* Subtle background element to emphasize glass effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cream/5 rounded-full blur-[150px] pointer-events-none" />
        
        <Header />
        
        <main className="relative z-10 w-full max-w-7xl mx-auto flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
