import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddEditUser from "./Pages/AddEditUser";
import NavBar from "./Components/NavBar";

function App() {
  return (
  <BrowserRouter>
      <div className="App">
      <h1>Wow this is cool</h1>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddEditUser/>} />
          <Route path="/update/id" element={<AddEditUser/>} />
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
