import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import CountriesForm from '../../forms/CountriesForm';
import { deleteStates } from '../../helpers/data/stateData';

const StatesCard = ({
  setStates,
  stateName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  citiesVisited
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteStates(fbKey)
          .then((projectArray) => setStates(projectArray));
        console.warn('im okay');
        break;
      default:
    }
  };

  const editCard = (fbKey) => (
    <div className='editbtns'>
      <Button style={{ backgroundColor: '#FFFFFF', color: '#28282B', border: '#FFFFFF' }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
      <Button style={{ backgroundColor: '#FFFFFF', color: '#28282B', border: '#FFFFFF' }}
       onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' '}
    </Button>
    </div>
  );

  return (
    <Card className='dogCard'>
      <CardBody>
        <CardTitle tag="h5">{stateName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Location: {location}</CardSubtitle>
        <CardText>Cities Visited: {citiesVisited}</CardText>
      </CardBody>
      <img width="100%" src={imageUrl} alt="Card image cap" />
      <CardBody>
        <CardText>Restaurants: {restaurant}</CardText>
        <CardText>Activites: {activities}</CardText>
        <CardText>Notes: {notes}</CardText>
        { editCard(firebaseKey) }
        { editing && <CountriesForm
            formTitle='Edit Project'
            setState={setStates}
            firebaseKey={firebaseKey}
            citiesVisited={citiesVisited}
           imageUrl ={imageUrl}
           location={location}
           stateName={stateName}
           activities={activities}
           restaurant={restaurant}
           notes={notes}
        /> }
        </CardBody>
    </Card>

  );
};

StatesCard.propTypes = {
  setStates: PropTypes.func,
  stateName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  citiesVisited: PropTypes.string
};
export default StatesCard;
