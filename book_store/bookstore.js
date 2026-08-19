
function createBookElement(imageSrc, price) {
    const div = document.createElement("div");
    div.setAttribute("class", "book");
    const image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    image.setAttribute("height", "200px");
    image.setAttribute("width", "200px");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Price: " + price + "/-";
    h2.style.color = "blue";
    const bt = document.createElement("button");
    bt.innerHTML = "Add to Cart";
    bt.style.color = "white";
    bt.style.backgroundColor = "green";
    bt.style.padding = "10px 15px";
    bt.style.border = "none";
    bt.style.borderRadius = "3px";
    bt.style.cursor = "pointer";
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);
    const parent = document.getElementById("bookstore");
    parent.appendChild(div);
}

const books = [
    { img: "images/book1.png", price: 345 },
    { img: "images/book2.png", price: 400 },
    { img: "images/book3.png", price: 299 }
];

books.forEach(book => createBookElement(book.img, book.price));

