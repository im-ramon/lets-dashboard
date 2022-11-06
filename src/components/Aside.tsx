import logo from '../assets/images/img/logo.png'
import home from '../assets/images/svg/home.svg'
import chart from '../assets/images/svg/chart.svg'
import messaging from '../assets/images/svg/messaging.svg'
import { NavLink } from "react-router-dom";

function Aside() {
    return (
        <aside>
            <div id="logo">
                <img alt="logo" className="logo" src={logo} />
                <p>Let's! | Especialista <span className="primary">X</span></p>
            </div>

            <nav>
                <NavLink className="routerlink" to="/"><img src={home} alt="home" />Home</NavLink>
                <NavLink className="routerlink" to="/dashboard"><img src={chart} alt="Home" />Dashboard</NavLink>
                <NavLink className="routerlink" to="/messaging"><img src={messaging} alt="Home" />Mensagens</NavLink>
            </nav>

            <div id="aside-footer">
                <p>
                    <span>Precisando de ajuda? </span>
                    <a href="http://ramonoliveira.dev" target="_blank" rel="noopener noreferrer">contato@ramonoliveira.dev</a>
                </p>
            </div>
        </aside>
    );
}

export default Aside;