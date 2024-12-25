import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/Body';

const styleCard = {
  backgroundColor: '#f0f0f0',
};

//not using the key(not acceptable)<<<<<<<<<<<index as key<<<<<<<<<<<<<unique id(best practice);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />); //Rendering
