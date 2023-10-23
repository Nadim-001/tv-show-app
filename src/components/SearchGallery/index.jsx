import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard';
import SearchForm from '../SearchForm';

export default function SearchGallery() {
  const [searchString, setSearchString] = useState('Arrow');
  const [category, setCategory] = useState('');
  const [ShowData, setShowData] = useState([]);

  useEffect(() => {
    async function searchAPI() {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchString}`
        );
        const data = await response.json();
        const showData = data.map((s) => s.show);
        console.log(showData);
        setShowData(showData);
      } catch (error) {
        console.log(error);
      }
    }
    searchAPI();
  }, [searchString]);

  return (
    <>
      <SearchForm
        setSearchString={setSearchString}
        setCategory={setCategory}
        category={category}
        ShowData={ShowData}
        setShowData={setShowData}
      />
      {ShowData.map((s) => (s.image ? <ShowCard show={s} key={s.id} /> : ''))}
    </>
  );
}
