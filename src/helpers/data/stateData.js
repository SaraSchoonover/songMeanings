import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getStates = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/states.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStates = (dog) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/states.json`, dog)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/states/${response.data.name}.json`, body)
        .then(() => {
          getStates().then((dogArray) => resolve(dogArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteStates = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/states/${firebaseKey}.json`)
    .then(() => getStates().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateStates = (state) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/states/${state.firebaseKey}.json`, state)
    .then(() => getStates().then(resolve))
    .catch((error) => reject(error));
});

export {
  getStates,
  addStates,
  deleteStates,
  updateStates
};
