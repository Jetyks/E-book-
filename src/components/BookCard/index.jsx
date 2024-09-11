import './index.css'

const BookCard = ({ img, titulo, autor, isFirst, isLast }) => {
  const autorTitle = `-${autor}-`
  const classNameFirstCard = isFirst
    ? 'first-card-div card-div'
    : 'card-div'
  const classNameCard = isLast
    ? 'last-card-div'
    : 'card-div'

  const classNameBookImg = isLast
    ? 'last-book-img'
    : 'book-img'
  return (
    <div className={classNameFirstCard || classNameCard}>
        <div className="book-img-container">
            <img className={classNameBookImg} src={img} alt="book-img"/>
        </div>
        <div className='book-title-container'>
            <h3 className='book-title'> {titulo}</h3>
        </div>
        <div className='book-autor-container'>
            <h5 className='book-autor'> {autorTitle}</h5>
        </div>
    </div>
  )
}

export {
  BookCard
}
