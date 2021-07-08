import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';
import '../styles/index.scss';
import { getCountry } from '../helpers/data/countryData';
import { getStates } from '../helpers/data/stateData';

function App() {
  const [admin, setAdmin] = useState(null);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getCountry().then((projectsArray) => setCountry(projectsArray));
        getStates().then((projectsArray) => setState(projectsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getCountry().then((projectsArray) => setCountry(projectsArray));
        getStates().then((projectsArray) => setState(projectsArray));
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Routes
      state={state}
      setState={setState}
      country={country}
      setCountry={setCountry}
      />
      </div>
  );
}
export default App;
