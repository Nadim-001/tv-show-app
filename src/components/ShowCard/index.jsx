import React, { useState } from 'react';

export default function ShowCard({ show, image }) {
  console.log();
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <div>Rating: {show.rating.average}/10</div>
        <h2>{show.name}</h2>
        <em>
          {show.language}, {show.premiered}
        </em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
    </div>
  );
}
