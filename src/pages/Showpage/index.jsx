import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';

export default function Showpage() {
  const { id } = useParams();
  const [show, setShow] = useState({ image: {}, rating: {} });

  useEffect(() => {
    async function displayShow() {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    displayShow();
    // setImage(show.image.medium);
    // console.log(image);
  }, []);

  return <ShowCard show={show} />;
}
