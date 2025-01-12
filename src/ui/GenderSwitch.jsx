import FormRow from './FormRow';
import { useSleepContext } from '../data/Context';

function GenderSwitch() {
  const handleSelect = (gender) => {
    dispatch({
      type: 'setUserGender',
      payload: gender,
    });
  };

  const { gender, dispatch } = useSleepContext();

  return (
    <FormRow
      label='gender'
      id='gender'
    >
      <div className='gender-switch'>
        <div
          className={`option ${
            gender === 'male' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('male')}
        >
          Male
        </div>
        <div
          className={`option ${
            gender === 'female' ? 'selected' : ''
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
