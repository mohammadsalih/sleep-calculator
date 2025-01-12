import { useSleepContext } from '../data/Context';
import FormRow from './FormRow';

function AgeInput() {
  const { age, dispatch } = useSleepContext();

  return (
    <FormRow
      label='age'
      id='age'
    >
      <input
        className='input age'
        type='number'
        id='age'
        value={age}
        onChange={(e) => {
          if (e.target.value < 0) return;

          dispatch({
            type: 'setUserAge',
            payload: Number(e.target.value),
          });
        }}
      />
    </FormRow>
  );
}

export default AgeInput;
