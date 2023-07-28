import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { GifDetail } from "./pages/GifDetail/GifDetail";
import { GifRepository } from "./core/domain/Gif/GifRepository";
import { apiGifRepository } from "./core/infraestructure/Gif/apiGifRepository";

const gifRepository: GifRepository = apiGifRepository;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home gifRepository={gifRepository} />} />
          <Route
            path="/detail/:id"
            element={<GifDetail gifRepository={gifRepository} />}
          />

          <Route path="*" element={<p>404. Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
