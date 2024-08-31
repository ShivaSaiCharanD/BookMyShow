import { useState, useEffect } from 'react';
import axios from "axios";

export default function Theatre() {
  const [showtimes, setShowtimes] = useState([]);
  const movieId = localStorage.getItem('movie');

  const getShowtimes = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/admin/getshowtimebyid/${movieId}`);
      setShowtimes(response.data.details || []);
      console.log(response.data.details);
    } catch (error) {
      console.error("Error fetching showtimes:", error);
    }
  };

  useEffect(() => {
    getShowtimes();
  }, []);

  console.log("Movie ID from localStorage:", movieId);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Showtimes</h1>
        {showtimes.map(theatre => (
          <div key={theatre.theatreId} className="mb-8">
            <p className="font-bold text-lg mb-2">{theatre.theatreName}</p>
            <div className="flex flex-wrap space-x-4">
              {theatre.showTimeDetails.map((showtime, index) => (
                <div key={index} className="bg-yellow-600 p-2 rounded-md">
                  <p className='font-extrabold'>{showtime.showTime}</p>
                  {/* <p>{showtime.showtimeID}</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
