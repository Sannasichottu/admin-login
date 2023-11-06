import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
