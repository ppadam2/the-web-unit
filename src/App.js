import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js"
import ImageList from "./Components/ImageList/ImageList.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/lawdepot" element={<ImageList></ImageList>} />
      </Routes>
    </div>
  );
}

export default App;
