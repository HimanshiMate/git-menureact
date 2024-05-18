import '../../assets/style/index.css';
import {Link ,Outlet} from "react-router-dom";

function Navbar() {
    
    
    return(
        <>
        <section id="nav">
            <div><Link to="/"><img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" width={"120px"}/></Link></div>
            <div><Link to="/features">Features</Link></div>
            <div><Link to="/solutions">Solutions</Link></div>
            <div><Link to="/enterprice">Enterprice</Link></div>
            <div><Link to="/resources">Resources</Link></div>
            <div><button id="but1">TALK TO SALE</button></div>
            <div><button id="but2">TRY FOR FREE</button></div>
            <Outlet/>
        </section>
        </>
    )
}
export default Navbar;