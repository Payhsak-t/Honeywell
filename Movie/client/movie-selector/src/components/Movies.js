import React, { useEffect, useState } from 'react';
import { Seats } from './Seats';

export const Movies = (props) => {
  const [movies, setmovies] = useState('');

  const displaySeats = (e) => {
    console.log(e.target.value);
    setmovies(e.target.value);
  };
  return (
    <>
      <div>
        <label>Pick a movie:</label>
        <select id="movie" onChange={displaySeats}>
          <option value="forrestgump">Forrest Gump</option>
          <option value="pursuitOfHappiness">Pursuit of Happiness</option>
          <option value="sn">The Social Network</option>
          <option value="tm">The Millers</option>
        </select>
      </div>
      <Seats
        movie={movies.length === 0 ? 'forrestgump' : movies}
        username={props.username}
      />
    </>
  );
};
