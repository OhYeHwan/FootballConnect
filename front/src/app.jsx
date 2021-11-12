import Main from "./components/main/main";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Whoops404 from "./pages/whoops404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Whoops404 />} />
    </Routes>
  );
}

export default App;
