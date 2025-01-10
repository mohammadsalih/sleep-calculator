import AgeInput from '../../../ui/AgeInput';
import GenderSwitch from '../../../ui/GenderSwitch';
import TimeInput from '../../../ui/TimeInput';
import TypeInput from '../../../ui/TypeInput';

function Form() {
  return (
    <form>
      <GenderSwitch />

      <AgeInput />

      <TypeInput />

      <TimeInput />
    </form>
  );
}

export default Form;
