import { Link } from 'react-router-dom'
import './zone5.css'


function Zone5(){
    return(
        <div className="zone5">
            <ul className="linksfoot">
                <Link to ="/MentionsLegal">Mentions legales</Link>
                <Link to="/Cookies">Cookies</Link>
                <Link to ="/PlanSite">Plan du site</Link>
                <Link to ="/Copyright">C 2023</Link>
            </ul>
        </div>
    )
}

export default Zone5