import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { GifDetail } from "./pages/GifDetail/GifDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<GifDetail />} />

          <Route path="*" element={<p>404. Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
