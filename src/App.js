import React, { useEffect } from 'react';
import MainContainer from './components/MainContainer';


function App() {
  useEffect(() => {
    console.log('Страница загрузилась!');
  }, []);
  
  return (
    <MainContainer />
  );
}

export default App;
