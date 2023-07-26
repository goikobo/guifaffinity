import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<GifDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function GifDetail() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
