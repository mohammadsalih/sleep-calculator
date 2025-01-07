import React from 'react';

const FormRow = ({ label, id, children }) => {
  return (
    <div className='form-row'>
      <label htmlFor={id}>{label}</label>

      <span>:</span>

      <div className='form-row-input-container'>
        {children}
      </div>
    </div>
  );
};

export default FormRow;
