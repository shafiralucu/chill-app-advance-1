import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import TaskMovies from "./pages/TaskMovies";
import MoviesReduxPage from "./pages/MoviesReduxPage"; // ⬅️ NEW

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/task-movies" element={<TaskMovies />} />
        <Route path="/task-movies-redux" element={<MoviesReduxPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}
