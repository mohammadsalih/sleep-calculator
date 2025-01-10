import FormRow from './FormRow';

function TimeInput() {
  return (
    <FormRow
      label='time'
      id='time'
    >
      <input
        type='time'
        id='time'
        className='input'
      />
    </FormRow>
  );
}

export default TimeInput;
