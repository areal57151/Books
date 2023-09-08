
import { useState } from "react";
import { data } from "./data";
import './App.css';
function App() {
  
  const [book, setBook] =  useState(0);
  const {id, name, description, icon} = data[book];

  const perviousBook =() => {
      setBook((book => {
       book --;
       if(book < 0){
        return data.length-1;
       }
       return book;
    }))
  }
  const nextBook =() => {
      setBook((book =>{
      book ++;
      if(book > data.length -1){
         book = 0;
      }
      return book;
      }))
  }
  return (<div>
    <h1>
      <p>10 отличных книг, которые помогут пережить первый класс ребёнка !</p>
      <p> Прочитайте сами, потом с ребёнком — и сохраните всем нервы! </p>
    </h1>
    <div className="btn">
       <button onClick={perviousBook}>Предыдущая</button>
      <button onClick={nextBook}>Следующая</button>
    </div>
    <div className="container">
      <img src={icon} width="350px" height="250px" alt="foto"/>
        <h1>{name}</h1>
        <h3>{description}</h3>
    </div>
    </div>)
}

export default App;
