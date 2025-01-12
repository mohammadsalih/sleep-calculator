import MainContainer from '../layout/MainContainer';
import SleepForm from '../layout/SleepForm';
import SleepInfo from '../layout/SleepInfo';
import { useSleepContext } from '../data/Context';

function Home() {
  const { showInfo } = useSleepContext();

  return (
    <main className='main'>
      <MainContainer>
        {showInfo && <SleepInfo />}

        <SleepForm />
      </MainContainer>
    </main>
  );
}

export default Home;
