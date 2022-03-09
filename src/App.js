
import './App.css';
import Topmenu from "./components/Topmenu"
import Home from "./components/Home"
import About from "./components/About"
import Abouttw from "./components/Abouttw"
import Inforpage from "./components/Inforpage"
import Blog from "./components/Blog"
import Review from "./components/Review"
import Feature from "./components/Feature"
import Download from "./components/Download"
import Footer from "./components/Footer"




function App() {
  return (
    <div className ="AppBox">

<Topmenu/>
<Home/>

<About/>

<Abouttw/>

<Download/>

<Feature/>

<Review/>

<Blog/>

<Footer/>
    </div>
  );
}

export default App;
