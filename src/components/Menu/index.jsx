import './index.css'
import logo from "../../assets/img/bb-logo.png"
import { NavCircleItem } from '../NavCircleItem';
function Menu (){
    return(
        <nav>
            <div className="menu-container">
                <div className='logo-container'>
                    <img className='logo-png' src= {logo} alt="" />
                </div>
                <div className='nav-items-container'>
                    <div className='nav-items'>
                            <NavCircleItem/>
                            <NavCircleItem/>
                            <NavCircleItem/>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export {Menu};