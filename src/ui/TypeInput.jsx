import { useSleepContext } from '../data/Context';
import FormRow from './FormRow';

function TypeInput() {
  const { calculationType, dispatch } =
    useSleepContext();

  return (
    <FormRow
      label='type'
      id='type'
    >
      <select
        name='type'
        id='type'
        className='select'
        value={calculationType}
        onChange={(e) => {
          dispatch({
            type: 'setCalculationType',
            payload: e.target.value,
          });
        }}
      >
        <option value='wakeUpTime'>
          Calculate wake up time
        </option>
        <option value='sleepTime'>
          Calculate sleep time
        </option>
      </select>
    </FormRow>
  );
}

export default TypeInput;
