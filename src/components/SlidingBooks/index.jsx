
import './index.css'

const SlidingBooks = (props) => {
  return (
    <div className='sliding-container'>
       {props.children}
    </div>
  )
}

export default SlidingBooks