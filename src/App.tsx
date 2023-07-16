import Banner from "./Components/Banner/Banner";
import Craft from "./Components/Craft/Craft";
import Division from "./Components/Division/Division";
import Explore from "./Components/Explore/Explore";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Trending from "./Components/Trending/Trending";
import Order from "./Components/order/Order";
import Footer from "./Components/Footer/Footer";
import Footerend from "./Components/Footer/Footerend";
import data from '../src/Data.json';

function App() {
  return (
    <div style={{ backgroundColor: "#f9f2ea" }}>
      <Header />
      <Main />
      <Trending items={data.Trending} showButton={true} />
      <Banner />
      <Trending items={data.choice} showButton={true} />
      <Division />
      <Trending items={data.Homeproducts} showButton={true} />
      <Craft />
      <Trending items={data.men}  showButton={true} />
      <Trending items={data.children} showButton={true} />
      <Trending items={data.work}  showButton={true} />
      <Order />
      <Explore />
      <Footer />
      <Footerend />
    </div>
  );
}

export default App;
