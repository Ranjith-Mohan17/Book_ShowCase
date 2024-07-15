import React from 'react'
import { useGlobalContext } from '../../context'
import Loading from '../Loader/Loader'
import coverImg from '../../images/cover_not_found.jpg';
import './BookList.css'
import Book from '../BookList/Book';
//https://covers.openlibrary.org/b/id/240727-S.jpg
const BookList = () => {
  const {books,loading,resultTitle}=useGlobalContext();
  const booksWithCover=books.map((singleBook)=>{
    return{
      ...singleBook,
      id:(singleBook.id).replace("/works/",""),
      cover_img: singleBook.cover_id?`https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`:coverImg
    }
  });
  if(loading) return <Loading />
  return (
    <section className='booklist'>
      <div className='conainer'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCover.slice(0,30).map((item,index)=>{
              return(
                <Book key={index} {...item}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList
