import React, { useState } from 'react';
import FormRow from './FormRow';
import { useSleepContext } from '../data/Context';

function GenderSwitch() {
  const [selected, setSelected] =
    useState('male');

  const handleSelect = (gender) => {
    setSelected(gender);
  };

  const { gender } = useSleepContext();
  console.log(gender);

  return (
    <FormRow
      label='gender'
      id='gender'
    >
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
            selected === 'female'
              ? 'selected'
              : ''
          }`}
          onClick={() => handleSelect('female')}
        >
          Female
        </div>
      </div>
    </FormRow>
  );
}

export default GenderSwitch;
