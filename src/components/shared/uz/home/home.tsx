import BigImg from "./bigImg";
import Card from "./card";
import Hamkorlar from "./hamkorlar";
import Platform from "./platform";
import Footer from "../footer";
import Responsive from "../responsive";

function Home() {
  return (
    <div>
      <Responsive />
      <BigImg />
      <Hamkorlar />
      <Card />
      <Platform />
      <Footer />
    </div>
  );
}

export default Home;
