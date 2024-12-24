import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/uz/home/home";
import Kurslar from "./components/shared/uz/kurslar/kurslar";
import Contact from "./components/shared/uz/contact/contact";
import Treyding from "./components/shared/uz/treyding/treyding";
import Shopping from "./components/shared/uz/home/shopping";
import Profile from "./components/shared/uz/profile/profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/uz" element={<Home />} />
        <Route path="/uz/courses" element={<Kurslar />} />
        <Route path="/uz/treyding" element={<Treyding />} />
        <Route path="/uz/contacts" element={<Contact />} />
        <Route path="/uz/shopping/cart" element={<Shopping />} />
      </Routes>
      <Profile />
    </div>
  );
}

export default App;
