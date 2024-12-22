import { Route, Routes } from "react-router-dom";
import Boshqaruv from "./home";
import Header from "./header";
import Curslar from "./curslar";
import Istaklar from "./istaklar";
import Carta from "./carta";
import Izoh from "./izoh";
import Bildirishnoma from "./bildirishnoma";
import Sozlamalar from "./sozlamalar";


function Profile() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Routes>
          <Route path="/uz/profile/" element={<Boshqaruv />} />
          <Route path="/uz/profile/my-courses" element={<Curslar />} />
          <Route path="/uz/profile/wishlist" element={<Istaklar />} />
          <Route path="/uz/profile/credit-cards" element={<Carta />} />
          <Route path="/uz/profile/reviews" element={<Izoh />} />
          <Route path="/uz/profile/notifications" element={<Bildirishnoma />} />
          <Route path="/uz/profile/settings" element={<Sozlamalar />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
