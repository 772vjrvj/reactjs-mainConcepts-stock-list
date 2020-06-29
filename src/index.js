import React from 'react';
import ReactDOM from 'react-dom';
import BasicListComponent from './MAIN CONCEPTS/8. Lists and Keys/Basic List Component';


 const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <BasicListComponent numbers={numbers} />
  </React.StrictMode>,
  document.getElementById('root')
);

