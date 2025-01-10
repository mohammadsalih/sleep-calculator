import FormRow from './FormRow';

function TypeInput() {
  return (
    <FormRow
      label='type'
      id='type'
    >
      <select
        name='type'
        id='type'
        className='select'
      >
        <option value='wake-up-time'>
          Calculate wake up time
        </option>
        <option value='wake-up-time'>
          Calculate sleep time
        </option>
      </select>
    </FormRow>
  );
}

export default TypeInput;
