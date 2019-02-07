import React from 'react';
import './wrapper.css';

export function Wrapper({children}) {
  return (
    <div className="container custom-wrapper">
      <div className="row">
        <div className="col-md-11">
          {children}
        </div>
      </div>

    </div>
  );
}


export default Wrapper;
