import MainContainer from '../layout/MainContainer';
import SleepForm from '../layout/SleepForm';
import SleepInfo from '../layout/SleepInfo';

function Home() {
  return (
    <main className='main'>
      <MainContainer>
        <SleepInfo />

        <SleepForm />
      </MainContainer>
    </main>
  );
}

export default Home;
