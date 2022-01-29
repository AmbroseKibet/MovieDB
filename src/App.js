import "./App.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
