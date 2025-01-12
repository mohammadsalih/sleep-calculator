import { useSleepContext } from '../data/Context';

function SubmitButton() {
  const { dispatch } = useSleepContext();

  const handleCalculateResult = function () {
    console.log('hey');
  };

  return (
    <button
      className='btn'
      onClick={handleCalculateResult}
    >
      Calculate
    </button>
  );
}

export default SubmitButton;
