import { useSleepContext } from '../../../data/Context';
import AgeInput from '../../../ui/AgeInput';
import GenderSwitch from '../../../ui/GenderSwitch';
import TimeInput from '../../../ui/TimeInput';
import TypeInput from '../../../ui/TypeInput';

function Form() {
  const { calculationType } = useSleepContext();

  return (
    <form>
      <GenderSwitch />

      <AgeInput />

      <TypeInput />

      {calculationType === 'wakeUpTime' && (
        <TimeInput />
      )}
    </form>
  );
}

export default Form;
