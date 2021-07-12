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
// import DogForm from '../../forms/DogForm';
// import { addWishList } from '../../helpers/data/wishListData';
// import CountriesCardForm from '../../forms/CountriesCardForm';
import { deleteCountry } from '../../helpers/data/countryData';
import CountryModal from './CountryModal';

const CountriesCard = ({
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
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

  // const [adding, setAdding] = useState(false);

  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'delete':
        deleteCountry(fbKey)
          .then((dogsArray) => setCountries(dogsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };

  const editCard = (fbKey) => (
    <div className='editbtns'>
      <Button style={{ backgroundColor: '#EAE4E9', color: '#28282B', border: '#black' }} onClick={() => handleClick(fbKey, 'delete')}><i className="far fa-trash-alt"></i></Button>
      <Button style={{ backgroundColor: '#EAE4E9', color: '#28282B', border: '#black' }}
       onClick={() => handleClick(fbKey, 'edit')}>
      <i className="far fa-edit"></i>
    {editing ? 'Close Form' : ' '}
    </Button>
    </div>
  );

  // const userCard = (fbKey) => (
  //   <div className='editbtns'>
  //     <Button style={{ backgroundColor: '#aec5eb', color: '#FFFFFF', border: '#FFFFFF' }}
  //      onClick={() => handleClick(fbKey, 'addToWishList')}> {adding ? 'Not Right Now' : 'Add To Wishlist'}</Button>
  //   </div>
  // );

  return (
      <Card className='countryCard'>
        <CardBody>
          <CardTitle tag="h5">{countryName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Location: {location}</CardSubtitle>
          <CardText>Cities Visited: {citiesVisited}</CardText>
        </CardBody>
        <img width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardText>Notable Restaurants: {restaurant}</CardText>
          <CardText>Activities: {activities}</CardText>
          <CardText>Notes: {notes}</CardText>
          { editCard(firebaseKey) }
          { editing && <CountryModal
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
          /> }
          </CardBody>
      </Card>

  );
};

CountriesCard.propTypes = {
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

export default CountriesCard;
