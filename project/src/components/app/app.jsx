import React from 'react';
import MainScreen from '../main-screen/main-screen';

function App(props) {
  const {offersCount} = props;

  return (
    <MainScreen
      offersCount={offersCount}
    />
  );
}

export default App;
