import BigImg from "./bigImg";
import Card from "./card";
import Hamkorlar from "./hamkorlar";
import Platform from "./platform";
import Header from "../header";
import Footer from "../footer";

function Home() {
  return (
    <div>
      <Header />
      <BigImg />
      <Hamkorlar />
      <Card />
      <Platform />
      <Footer />
    </div>
  );
}

export default Home;
