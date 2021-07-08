import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getCountry = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/countries.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addCountry = (dog) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/countries.json`, dog)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/countries/${response.data.name}.json`, body)
        .then(() => {
          getCountry().then((countryArray) => resolve(countryArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteCountry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/countries/${firebaseKey}.json`)
    .then(() => getCountry().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateCountry = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/countries/${project.firebaseKey}.json`, project)
    .then(() => getCountry().then(resolve))
    .catch((error) => reject(error));
});

export {
  getCountry,
  addCountry,
  deleteCountry,
  updateCountry
};
