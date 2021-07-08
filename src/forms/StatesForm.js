import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { addStates, updateStates } from '../helpers/data/stateData';

const StatesForm = ({
  stateName,
  location,
  imageUrl,
  firebaseKey,
  activities,
  restaurant,
  notes,
  setStates

}) => {
  const history = useHistory();
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
      updateStates(state).then(setStates);
    } else {
      addStates(state).then(setStates)
        .then(() => {
          history.push('/usStates');
        });
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
        <h2>Project Form: </h2>
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
        <Label for="screenshot">Location:</Label>
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

StatesForm.propTypes = {
  stateName: PropTypes.string,
  location: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  activities: PropTypes.string,
  restaurant: PropTypes.string,
  notes: PropTypes.string,
  setStates: PropTypes.string
};

export default StatesForm;
