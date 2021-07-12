import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addCountry, updateCountry } from '../helpers/data/countryData';

const CountriesForm = ({
  countryName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  citiesVisited,
  setModal

}) => {
  const history = useHistory();
  const [country, setCountry] = useState({
    countryName: countryName || '',
    location: location || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null,
    activities: activities || '',
    restaurant: restaurant || '',
    notes: notes || '',
    citiesVisited: citiesVisited || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country.firebaseKey) {
      updateCountry(country).then(setCountry);
      setModal(false);
    } else {
      addCountry(country).then(setCountry)
        .then(() => {
          history.push('/countries');
        });
    }
  };
  const handleInputChange = (e) => {
    setCountry((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='cForm'>
    <Form
    id='addProjectForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h2>Add A New Country: </h2>
        <FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="description">Country Name:</Label>
          <Input
            name='countryName'
            id='countryName'
            value={country.countryName}
            type='text'
            placeholder='Enter a Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="location">Location:</Label>
          <Input
            name='location'
            id='location'
            value={country.location}
            type='text'
            placeholder='Enter a location'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="citiesVisited">Cities Visited:</Label>
          <Input
            name='citiesVisited'
            id='citiesVisited'
            value={country.citiesVisited}
            type='text'
            placeholder='Enter a Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="screenshot">Restaurant:</Label>
          <Input
            name='restaurant'
            id='restaurant'
            value={country.restaurant}
            type='text'
            placeholder='Enter a location'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="screenshot">Activities:</Label>
          <Input
            name='activities'
            id='activities'
            value={country.activities}
            type='text'
            placeholder='Enter a location'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="url">Image URL:</Label>
          <Input
            name='imageUrl'
            id='imageUrl'
            value={country.imageUrl}
            type='imageUrl'
            placeholder='Enter image'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
        <Label for="url">Notes:</Label>
          <Input
            name='notes'
            id='notes'
            value={country.notes}
            type='text'
            placeholder='Enter Notes'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

CountriesForm.propTypes = {
  countryName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  citiesVisited: PropTypes.string,
  setModal: PropTypes.string
};

export default CountriesForm;
