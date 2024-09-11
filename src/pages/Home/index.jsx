import { useEffect, useState } from 'react'
import { BookCard } from '../../components/BookCard'
import SlidingBooks from '../../components/SlidingBooks'
import './index.css'
import { getFiveBooks } from '../../services/books'

function Home () {
  const libros = [
    { titulo: 'Los 7 hábitos de la gente altamente efectiva', autor: 'Stephen R. Covey' },
    { titulo: 'Cómo ganar amigos e influir sobre las personas', autor: 'Dale Carnegie' },
    { titulo: 'Piensa y hazte rico', autor: 'Napoleon Hill' },
    { titulo: 'El monje que vendió su Ferrari', autor: 'Robin Sharma' },
    { titulo: 'Hábitos atómicos', autor: 'James Clear' },
    { titulo: 'Despierta tu héroe interior', autor: 'Victor Hugo Manzanilla' },
    { titulo: 'El poder del ahora', autor: 'Eckhart Tolle' },
    { titulo: 'El sutil arte de que te importe un caraj*', autor: 'Mark Manson' },
    { titulo: 'Tus zonas erróneas', autor: 'Wayne Dyer' },
    { titulo: 'Vivir con abundancia', autor: 'Deepak Chopra' }
  ]

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getFiveBooks()
      if (data && data.items) {
        setBooks(data.items)
        console.log(books)
      }
    }

    fetchBooks()
  }, [])

  return (
        <div className="home-container">
            <h2 className='greeting-text'>Hi, Carlos</h2>
            <p className='second-greeting-text'>What would you like to read today?</p>
            <div className='sliding-books-home'>
                <SlidingBooks>
                    {
                        books.slice(0, 5).map((book, index, array) => {
                          const isFirst = index === 0
                          const isLast = index === array.length - 1
                          return (
                                <BookCard
                                 key={book.id}
                                 img={book.volumeInfo.imageLinks.thumbnail}
                                 titulo={book.volumeInfo.title}
                                 autor={book.volumeInfo.authors}
                                 isLast={isLast}
                                 isFirst={isFirst}
                                 />
                          )
                        })
                    }
                </SlidingBooks>
            </div>

        </div>
  )
}

export { Home }
