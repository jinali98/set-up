import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const prevPersonHandler =() => {
    setIndex((index) =>{
      let newIndex = index - 1
      if(newIndex < 0){
        return newIndex = people.length-1
      }
      return newIndex
    })
  }

  const nextPersonHandler =() => {
    setIndex((index) =>{
      let newIndex = index + 1
      if(newIndex > people.length -1){
        return newIndex = 0;
      }
      return newIndex
    })
  }

  const randomPersonHandler = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() *( 10 / 2))
      if(newIndex > people.length -1){
        return newIndex = 0;
      }
      console.log(newIndex);
      return newIndex
    })  
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
        
      </div>
      <button className="random-btn" onClick={randomPersonHandler}>Surprice Me!</button>
    </article>
  );
};

export default Review;
