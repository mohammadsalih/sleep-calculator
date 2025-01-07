import React, { useState } from 'react';

const GenderSwitch = () => {
  const [selected, setSelected] =
    useState('male');

  const handleSelect = (gender) => {
    setSelected(gender);
  };

  return (
    <div className='gender-switch'>
      <div
        className={`option ${
          selected === 'male' ? 'selected' : ''
        }`}
        onClick={() => handleSelect('male')}
      >
        Male
      </div>
      <div
        className={`option ${
          selected === 'female' ? 'selected' : ''
        }`}
        onClick={() => handleSelect('female')}
      >
        Female
      </div>
    </div>
  );
};

export default GenderSwitch;
