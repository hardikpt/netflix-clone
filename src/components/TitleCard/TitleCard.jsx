import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer e7e799e5b411c20fd42260ef47d3707f' // Replace with your actual API key
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw new Error(`HTTP status ${response.status}: ${error.message}`);
          });
        }
        return response.json();
      })
      .then(data => setApiData(data.results))
      .catch(error => console.error('Error:', error));

    cardsRef.current.addEventListener('wheel', handleWheel);

    return () => {
      cardsRef.current.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className="title-card">
      <h2>{title || "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
