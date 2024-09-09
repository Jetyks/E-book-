import './index.css'

const BookCard = () => {
    /* const placeHolderImage = ""; */
  return (
    <div className='card-div'>
        <div className="book-img-container">
            <img className='book-img' src="https://books.google.com.mx/books/publisher/content?id=TXiMDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U11sIDDGnFgnIU4MkFkQ8VNYRTEPg&w=1280" alt="book-img"/>
        </div>
        <div className='book-title-container'>
            <h3 className='book-title'> Titulo del libro</h3>
        </div>
    </div>
  )
}

export {
    BookCard
}