import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StatesCard from '../App/components/StatesCard';
import { getStates } from '../helpers/data/stateData';

function usStates({
  setState
}) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates()
      .then((dogsArray) => {
        setStates(dogsArray);
      });
  }, []);

  return (
    <div className="this">
      <div className='font'>
      <h2>States: </h2>
      </div>
      <div className="card-container">
      {states.map((stateInfo) => (
        <StatesCard
        key={stateInfo.firebaseKey}
        firebaseKey={stateInfo.firebaseKey}
        imageUrl ={stateInfo.imageUrl}
        location={stateInfo.location}
        stateName={stateInfo.stateName}
        activities={stateInfo.activities}
        restaurant={stateInfo.restaurant}
        notes={stateInfo.notes}
        states={stateInfo.states}
        setState={setState}
        setStates={setState}
        />
      ))}
      </div>
    </div>
  );
}

usStates.propTypes = {
  firebaseKey: PropTypes.string,
  stateName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  setStates: PropTypes.func,
  // admin: PropTypes.any
};

export default usStates;
