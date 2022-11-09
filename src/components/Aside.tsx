import { NavLink } from "react-router-dom";

import logo from '../assets/images/img/logo.png'
import home from '../assets/images/svg/home.svg'
import chart from '../assets/images/svg/chart.svg'
import messaging from '../assets/images/svg/messaging.svg'
import exit from '../assets/images/svg/exit.svg'
import { AppContext } from "../contexts/appContext";
import { useContext } from "react";

function Aside() {
    const { signOut } = useContext(AppContext)

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

            <div id="aside-footer" onClick={() => { signOut() }}>
                <p>Sair</p>
                <img alt="exit" className="exit" src={exit} />
            </div>
        </aside>
    );
}

export default Aside;