import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCountry } from '../helpers/data/countryData';
import CountriesCard from '../App/components/CountriesCard';

function Countries({
  setCountry
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountry()
      .then((dogsArray) => {
        setCountries(dogsArray);
      });
  }, []);

  return (
    <div className="this">
      <div className='font'>
      <h2>Countries: </h2>
      </div>
      <div className="card-container">
      {countries.map((dogInfo) => (
        <CountriesCard
        key={dogInfo.firebaseKey}
        firebaseKey={dogInfo.firebaseKey}
        formTitle='Edit Country'
         setCountries={setCountries}
        imageUrl ={dogInfo.imageUrl}
        location={dogInfo.location}
        countryName={dogInfo.countryName}
        activities={dogInfo.activities}
        restaurant={dogInfo.restaurant}
        notes={dogInfo.notes}
        countries={countries}
        setCountry={setCountry}
        citiesVisited={dogInfo.citiesVisited}
        />
      ))}
      </div>
    </div>
  );
}

Countries.propTypes = {
  countryName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.func,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  setCountry: PropTypes.func,
  citiesVisited: PropTypes.string
};

export default Countries;
