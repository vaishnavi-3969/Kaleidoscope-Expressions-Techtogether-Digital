import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Exhibition from "./components/Exhibition";
import Notifications from "./components/Notifications";
import ProfileCard from "./components/ProfileCard";
import Marketplace from "./components/Marketplace";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artists from "./components/Artists";
import Chat from "./components/Chat";
import Trending from "./components/Trending";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/exhibitions" element={<Exhibition/>} exact/>
        <Route path="/notifications" element={<Notifications/>} exact/>
        <Route path="/profile" element={<ProfileCard/>} exact/>
        <Route path="/marketplace" element={<Marketplace/>} exact/>
        <Route path="/artists" element={<Artists/>} exact/>
        <Route path="/chat" element={<Chat/>} exact/>
        <Route path="/trending" element={<Trending/>} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
