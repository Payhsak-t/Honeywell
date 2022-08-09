import React, { useState, useEffect } from 'react';
import './Seats.css';

export const Seats = (props) => {
  const [seat, setSeat] = useState([]);
  useEffect(() => {
    console.log(props);
    fetch(`http://localhost:3001/api/get/${props.movie}`)
      .then((res) => res.json())
      .then((data) => setSeat(data));
  }, []);
  return (
    <div>
      <div className="row">
        {seat.map((seat) => (
          <div>{seat}</div>
        ))}
      </div>
    </div>
  );
};
