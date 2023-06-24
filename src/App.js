import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Exhibition from "./components/Exhibition";
import Notifications from "./components/Notifications";
import ProfileCard from "./components/ProfileCard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/exhibitions" element={<Exhibition/>} exact/>
        <Route path="/notifications" element={<Notifications/>} exact/>
        <Route path="/profile" element={<ProfileCard/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
