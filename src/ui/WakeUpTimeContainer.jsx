function WakeUpTimeContainer() {
  return (
    <>
      <div className='main-sleep-time'>
        <span>best time to wake up</span>
        08:08 AM
      </div>
      <div className='sleep-cycles'>
        <div className='sleep-cycle'>
          <span>3 cycles</span>
          08:08 AM
        </div>
        <div className='sleep-cycle'>
          <span>4 cycles</span>
          08:08 AM
        </div>
        <div className='sleep-cycle'>
          <span>5 cycles</span>
          08:08 AM
        </div>
        <div className='sleep-cycle'>
          <span>6 cycles</span>
          08:08 AM
        </div>
      </div>

      <div className='sleep-cycles-description'>
        <span>
          If you wake up at one of these times,
        </span>
        <span>
          you’ll rise in between 90 minute sleep
          cycles.
        </span>
      </div>
    </>
  );
}

export default WakeUpTimeContainer;
