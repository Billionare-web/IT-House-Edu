import Header from "./components/shared/uz/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/uz/home/home";
import Footer from "./components/shared/uz/footer";
import Kurslar from "./components/shared/uz/kurslar/kurslar";
import Contact from "./components/shared/uz/contact/contact";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/uz" element={<Home />} />
            <Route path="/uz/courses" element={<Kurslar />} />
            <Route path="/uz/contacts" element={<Contact />} />
          </Routes>
      <Footer />
    </div>
  )
}

export default App
