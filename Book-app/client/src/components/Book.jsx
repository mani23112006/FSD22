import React from 'react'
import "./Book.css"
import navbar from "./Navbar.jsx"

const Book = (props) => {
  const {image, title, price} = props;
  return (
    <div className="book">
        <img src={image} alt="book" width="100px" height="100px"/>
        <h2 >Title:{title}</h2>
        <h2>Price: ${price}</h2>
        <button>Add to Cart</button>
      
    </div>
  )
}

export default Book
