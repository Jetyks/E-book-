import './index.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/bb-logo.png'
import homeIcon from '../../assets/img/home-icon.svg'
import saveIcon from '../../assets/img/save-icon.svg'
import settingsIcon from '../../assets/img/settings-icon.svg'
import { NavCircleItem } from '../NavCircleItem'

function Menu () {
  return (
        <nav>
            <div className="menu-container">
                <div className='logo-container'>
                    <img className='logo-png' src= {logo} alt="" />
                </div>
                <div className='nav-items-container'>
                    <div className='nav-items'>
                    <Link to="/">
                            <NavCircleItem icon={homeIcon} altText="Home Icon"/>
                        </Link>
                        <Link to="my-books">
                            <NavCircleItem icon={saveIcon} altText="Home Icon"/>
                        </Link>
                        <Link to="settings">
                            <NavCircleItem icon={settingsIcon} altText="Home Icon"/>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
  )
}

export { Menu }
