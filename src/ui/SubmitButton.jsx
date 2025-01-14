import { useSleepContext } from '../data/Context';

function SubmitButton() {
  const {
    dispatch,
    calculationType,
    sleepTimes,
    wakeUpTimes,
  } = useSleepContext();

  const handleCalculateResult = function () {
    if (calculationType === 'wakeUpTime') {
      dispatch({ type: 'setWakeUpTimes' });
      console.log(wakeUpTimes);
    } else {
      dispatch({ type: 'setSleepTimes' });
      console.log(sleepTimes);
    }
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
