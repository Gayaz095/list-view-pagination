import React from 'react';
import ListPaginate from './ListPaginate';
import './App.css';
import ToggleLight from './ToggleLight';

function App() {
  return (
    <>
      <div className="toggle">
        <ToggleLight />
      </div>
      <ListPaginate />
    </>
  );
}

export default App;