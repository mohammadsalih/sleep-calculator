import { useSleepContext } from '../data/Context';
import FormRow from './FormRow';

function TimeInput() {
  const { queryTime, dispatch } =
    useSleepContext();

  return (
    <FormRow
      label='time'
      id='time'
    >
      <input
        type='time'
        id='time'
        className='input'
        value={queryTime}
        onChange={(e) => {
          dispatch({
            type: 'setQueryTime',
            payload: e.target.value,
          });
        }}
      />
    </FormRow>
  );
}

export default TimeInput;
