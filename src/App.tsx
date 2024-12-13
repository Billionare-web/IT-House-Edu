import Header from "./components/shared/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/home/home";
import Footer from "./components/shared/footer";
import Kurslar from "./components/shared/kurslar/kurslar";
import Contact from "./components/shared/contact/contact";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Kurslar />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
      <Footer />
    </div>
  )
}

export default App
