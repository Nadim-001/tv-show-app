import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GalleryImage from '../GalleryImage';

export default function ShowGallery() {
  let fetchURL = 'https://api.tvmaze.com/shows';
  const [shows, setShows] = useState([]);
  useEffect(() => {
    //FETCH REQUEST

    async function displayShows() {
      try {
        const response = await fetch(fetchURL);
        const data = await response.json();
        setShows(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    displayShows();
  }, []);

  return (
    <div className="shows">
      {shows.map((show) => (
        <Link to={`${show.id}`} key={show.id}>
          <GalleryImage show={show} />
        </Link>
      ))}
    </div>
  );
}
