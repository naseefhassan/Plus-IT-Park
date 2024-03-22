import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserRouter from "./Routes/UserRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRouter/>}></Route>
      </Routes>
    </>
  );
}

export default App;
