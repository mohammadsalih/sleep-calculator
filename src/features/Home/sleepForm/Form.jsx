import FormRow from '../../../ui/FormRow';
import GenderSwitch from '../../../ui/GenderSwitch';

function Form() {
  return (
    <form>
      <FormRow
        label='gender'
        id='gender'
      >
        <GenderSwitch />
      </FormRow>

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
    </form>
  );
}

export default Form;
