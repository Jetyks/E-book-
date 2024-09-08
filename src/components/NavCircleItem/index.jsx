import './index.css'
import homeIcon from "../../assets/img/home-icon.svg"
const NavCircleItem = ({icon}) => {
  return (
    <div className='nav-circle'>
        <img src={homeIcon} alt="nav icon" />
    </div>
  )
}

export {
    NavCircleItem
}