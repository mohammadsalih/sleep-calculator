import SubmitButton from '../ui/SubmitButton';
import Logo from '../ui/Logo';
import Form from '../features/Home/sleepForm/Form';

function SleepForm() {
  return (
    <div className='sleep-form'>
      <Logo />

      <Form />

      <SubmitButton />
    </div>
  );
}

export default SleepForm;
