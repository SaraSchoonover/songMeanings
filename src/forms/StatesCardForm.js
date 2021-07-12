import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addStates, updateStates } from '../helpers/data/stateData';

const StatesCardForm = ({
  stateName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  // citiesVisited

}) => {
  // const history = useHistory();
  const [state, setState] = useState({
    stateName: stateName || '',
    location: location || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null,
    activities: activities || '',
    restaurant: restaurant || '',
    notes: notes || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.firebaseKey) {
      updateStates(state).then(setState);
    } else {
      addStates(state).then(setState);
    }
  };
  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='pForm'>
    <Form
    id='addProjectForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
        <h2>Edit State: </h2>
        <FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="description">State Name:</Label>
          <Input
            name='stateName'
            id='stateName'
            value={state.stateName}
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
            value={state.location}
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
            value={state.citiesVisited}
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
            value={state.restaurant}
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
            value={state.activities}
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
            value={state.imageUrl}
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
            value={state.notes}
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

StatesCardForm.propTypes = {
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

export default StatesCardForm;
