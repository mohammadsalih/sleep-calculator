import SleepTimeContainer from '../ui/SleepTimeContainer';
import WakeUpTimeContainer from '../ui/WakeUpTimeContainer';
import { useSleepContext } from '../data/Context';

function SleepInfo() {
  const { sleepTime, wakeUpTimes } =
    useSleepContext();

  console.log(sleepTime);

  return (
    <div className='sleep-info'>
      {sleepTime ? <SleepTimeContainer /> : ''}

      {wakeUpTimes.length ? (
        <WakeUpTimeContainer />
      ) : (
        ''
      )}
    </div>
  );
}

export default SleepInfo;
