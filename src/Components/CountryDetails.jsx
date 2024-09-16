import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
  const location = useLocation();
  const { country } = location.state || {};


  return (
    <div className='flex justify-center items-center py-10'>
    <div className="">
      <h2 className="font-bold text-xl">{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} className="h-[16rem] w-[20rem]" />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    </div>
    </div>
  );
};

export default CountryDetails;
