import React, { useState, useEffect } from 'react';

export default function SearchForm({
  setSearchString,
  setCategory,
  category,
  ShowData,
  setShowData,
}) {
  const [inputValue, setInputValue] = useState('');
  const [tvShows, setTvShows] = useState([]);
  const [distinctGenres, setDistinctGenres] = useState([]);

  useEffect(() => {
    // Extract distinct genres#
    async function displayShows() {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();
        setTvShows(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    displayShows();
    const genres = [...new Set(tvShows.flatMap((show) => show.genres))];
    setDistinctGenres(genres);
  }, [ShowData]);

  useEffect(() => {
    //displayShowsByCategory();
    const filteredArr = tvShows.filter((show) =>
      show.genres.includes(category)
    );

    setShowData(filteredArr);
  }, [category]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue('');
  }

  function handleCategory(e) {
    console.log(e.target.value);
    setCategory(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required onChange={handleInput} value={inputValue} />
      <input type="submit" value="Search" />
      <select onChange={handleCategory}>
        {distinctGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </form>
  );
}
