import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style/index.css';
import Navbar from './component/navbar';
import Features from "./pages/features/index";
import Solutions from './pages/solutions';
import Enterprice from './pages/enterprice'
import Resources from './pages/resources';
 import Slack from './pages/slack';
// import Pricing from './pages/pricing';
import Footer from './component/footer';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Slack/>}></Route>
      <Route path='/enterprice' element={<Enterprice/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/solutions' element={<Solutions/>}></Route>
      
      <Route path='/resources' element={<Resources/>}></Route>
      {/* <Route path='/pricing' element={<Pricing/>}></Route> */}
      
    </Routes>
     <Footer/> 
   </BrowserRouter>
    </>
  );
}

export default App;
