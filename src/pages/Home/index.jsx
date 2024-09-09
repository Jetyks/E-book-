
import { BookCard } from '../../components/BookCard';
import SlidingBooks from '../../components/SlidingBooks';
import './index.css'

function Home (){
    return(
        <div className="home-container">
            <h2 className='greeting-text'>Hi, Carlos</h2>
            <p className='second-greeting-text'>What would you like to read today?</p>
            <div className='sliding-books-home'>
                <SlidingBooks>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                </SlidingBooks>  
            </div>
            
        </div>
    )
}

export {Home};