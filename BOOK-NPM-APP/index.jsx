import ReactDOM from "react-dom/client";
import React from "react";


function Book(){
    return(
        <div className="book">
            <img  alt="Book image" width="100" height="150" />
            <h1>Book Title</h1>
            <h2>Price: $19.99</h2>
            <button>Add to Cart</button>
        </div>
    )
}

function App(){
    return(
        <div className="app">
            <Book/>
            </div>
    )
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);