import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200" ;

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      my Favourate Food
    </h1>
    <img alt="random" src={img + "?grayscale" } />
    <div>
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyYb4ipxGVUtAMIfqg9jm5Pd8E5IYdQfwJ89-_ku-GZN6GqQSig&s"
        />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SNZUV9fQbK4rSNC37WmSoDRzINdbj9R0yXUI_8vdYo2nnBIt&s"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DKKMcz0OtEanSgVesFdZa-gKPF3NJ5RUnaspgiKxGWca-Zd4HQ&s"
      />
    </div>
  </div>,
  document.getElementById("root")
);
