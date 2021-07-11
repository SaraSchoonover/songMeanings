import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody
} from 'reactstrap';
import StatesCardForm from '../../forms/StatesCardForm';

const StateModal = ({
  setStates,
  stateName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  // citiesVisited
}) => {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <Modal isOpen={modal}>
        <ModalBody className="dark-modal">
        {<StatesCardForm
              setState={setStates}
              firebaseKey={firebaseKey}
              // citiesVisited={citiesVisited}
             imageUrl ={imageUrl}
             location={location}
             stateName={stateName}
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

StateModal.propTypes = {
  stateName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  setStates: PropTypes.string
};

export default StateModal;
