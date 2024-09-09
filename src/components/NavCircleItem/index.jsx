import './index.css'

const NavCircleItem = ({ icon, altText }) => {
  return (
    <div className='nav-circle'>
        <img src={icon} alt={altText} />
    </div>
  )
}

export {
    NavCircleItem
}