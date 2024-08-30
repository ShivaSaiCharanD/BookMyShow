import '../Css/Theatre.css';
import { useState } from 'react';
import clsx from 'clsx';

const theatre = {
  A: [1, 15],
  B: [1, 10],
  C: [1, 5],
};

const movies = [
  {
    name: 'Sudarshan-10:50Am',
    price: 3,
    occupied: {
      A: [3, 10], // array gives the occupied seats in the row
      B: [1, 4, 6],
    },
  },
  {
    name: 'Sudarshan-2:30Pm',
    price: 4,
    occupied: {
      A: [1, 2, 3, 4, 15],
      B: [1, 10],
      C: [1, 4, 5],
    },
  },
  {
    name: 'Sudarshan-6:30Pm',
    price: 3,
    occupied: {
      A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15],
      B: [1, 2, 3, 4, 5, 6, 10],
      C: [1, 2, 3],
    },
  },
  {
    name: 'Sudarshan-10:30Pm',
    price: 5,
    occupied: {
      A: [7, 8, 9, 10, 14, 15],
      B: [1, 2, 3, 4, 10],
      C: [1, 2, 3, 4, 5],
    },
  },
];

const seatsTotal = [];

for (let row in theatre) {
  if (theatre.hasOwnProperty(row)) {
    const [first, last] = theatre[row];
    const temp = [];
    for (let i = first; i <= last; i++) {
      temp.push(`${row}${i}`);
    }
    seatsTotal.push(temp);
  }
}

export default function TheatreSeats() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="Theatre">

      <div className="App">
        <h1>Book your movie tickets for Saripodhaa Sanivaaram</h1>
        <Movies
          movie={selectedMovie}
          onChange={(movie) => {
            setSelectedSeats([]);
            setSelectedMovie(movie);
          }}
        />
        <ShowCase />
        <Cinema
          movie={selectedMovie}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />

        <p className="info">
          You have selected <span className="count">{selectedSeats.length}</span>{' '}
          seats for the price of{' '}
          <span className="total">
            {selectedSeats.length * selectedMovie.price}$
          </span>
        </p>
      </div>
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick ShowTime</label>
      <select
        id="movie"
        value={movie.name}
        style={{ color: 'black' }} 
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seatsTotal.map((rowSeats) => (
          <div key={rowSeats[0]} className="row">
            {rowSeats.map((seat) => {
              const row = seat[0]; // Get row letter
              const seatNumber = parseInt(seat.slice(1), 10); // Get seat number
              const isSelected = selectedSeats.includes(seat);
              const isOccupied = movie.occupied[row]?.includes(seatNumber);

              return (
                <span
                  tabIndex="0"
                  key={seat}
                  className={clsx(
                    'seat',
                    isSelected && 'selected',
                    isOccupied && 'occupied'
                  )}
                  onClick={isOccupied ? null : () => handleSelectedState(seat)}
                  onKeyPress={
                    isOccupied
                      ? null
                      : (e) => {
                        if (e.key === 'Enter') {
                          handleSelectedState(seat);
                        }
                      }
                  }
                >
                  {seat}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
