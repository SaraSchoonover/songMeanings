import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody
} from 'reactstrap';
import CountriesCardForm from '../../forms/CountriesCardForm';

const CountryModal = ({
  countryName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  setCountries,
  citiesVisited
}) => {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <Modal isOpen={modal}>
        <ModalBody className="dark-modal">
        {<CountriesCardForm
              formTitle='Edit Project'
              setCountries={setCountries}
              firebaseKey={firebaseKey}
              citiesVisited={citiesVisited}
             imageUrl ={imageUrl}
             location={location}
             countryName={countryName}
             activities={activities}
             restaurant={restaurant}
             notes={notes}
             setModal={setModal}
            />
        }
        </ModalBody>
      </Modal>
    </div>
  );
};

CountryModal.propTypes = {
  countryName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  setCountry: PropTypes.func,
  setCountries: PropTypes.func,
  citiesVisited: PropTypes.string
};

export default CountryModal;
