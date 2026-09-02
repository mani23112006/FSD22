import React from 'react'
import Book from './Book'

const Home = () => {
    const bookdata=[
        {image:"",title:"ReactJS",price:10},
        {image:"",title:"NodeJS",price:10},
        {image:"",title:"ExpressJS",price:10},
        {image:"",title:"ReactJS",price:10},
        {image:"",title:"ReactJS",price:10},
    ]

    return (
      <div className="home">
        <div className="book-container">  
          {bookdata.map((book, index) => (
            <Book key={index} image={book.image} title={book.title} price={book.price} />
          ))}
        </div>
    </div>
  )
}

export default Home
