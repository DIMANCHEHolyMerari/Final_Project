import Zonepub from "../../zone2/zonepub"
import Zone3 from "../../zone3/zone3"
import Zone4 from "../../zone4/zone4"
import Zone5 from "../../zone5/zone5"
import Navbar from "../navbar"
import './home.css'



function Home(){
    return(
        <div className="home">
            <div>
                <Navbar/>
            </div>
            <div>
                <Zonepub/>
            </div>
            <div>
                <Zone3/>
            </div>
            <div>
                <Zone4/>
            </div>
            <div>
                <Zone5/>
            </div>
            
        </div>
    )
}

export default Home