import FormRow from './FormRow';

function AgeInput() {
  return (
    <FormRow
      label='age'
      id='age'
    >
      <input
        className='input age'
        type='number'
        id='age'
      />
    </FormRow>
  );
}

export default AgeInput;
