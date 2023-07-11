import Banner from "./Components/Banner/Banner";
import Choices from "./Components/Choices/Choices";
import Craft from "./Components/Craft/Craft";
import Division from "./Components/Division/Division";
import Explore from "./Components/Explore/Explore";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Men from "./Components/Men/Men";
import Wonder from "./Components/Men/Wonder";
import Work from "./Components/Men/Work";
import Resides from "./Components/Resides/Resides";
import Trending from "./Components/Trending/Trending";
import Order from "./Components/order/Order";
import Footer from "./Components/Footer/Footer";
import Footerend from "./Components/Footer/Footerend";


function App() {
  return (
    <div style={{backgroundColor:"#f9f2ea"}}>
      <Header />
      <Main/>
      <Trending/>
      <Banner/>
      <Choices/>
      <Division/>
      <Resides/>
      <Craft/>
      <Men/>
      <Wonder/>
      <Work/>
      <Order/>
      <Explore/>
      <Footer/>   
      <Footerend/>
   </div>
  );
}

export default App;
