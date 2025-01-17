import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/books";
import Add from "./pages/add";
import Update from "./pages/update";
import "./style.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
