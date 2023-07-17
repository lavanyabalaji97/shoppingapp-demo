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
      <Trending items={data.Trending} para="For this season" title="Trending & New" showButton={true} />
      <Banner />
      <Trending items={data.choice} para="For Women" title="Choices for the season"  showButton={true} />
      <Division />
      <Trending items={data.Homeproducts} para="For the Home" title="where the Heart Resides"  showButton={true} />
      <Craft />
      <Trending items={data.men} para="For Men" title="Things for Men"  showButton={true} />
      <Trending items={data.children} para="For Children" title="The Wonder of the growing years"  showButton={true} />
      <Trending items={data.work} para="For Work" title="Work in style"  showButton={true} />
      <Order />
      <Explore />
      <Footer />
      <Footerend />
    </div>
  );
}

export default App;
