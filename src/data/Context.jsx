import {
  createContext,
  useContext,
  useReducer,
} from 'react';

// Initial State
const initialState = {
  userProfile: { age: 0, gender: 'male' }, // User's age and gender
  calculationType: 'wakeUpTime', // "sleepTime" or "wakeUpTime"
  queryTime: '08:00', // Input time (wake-up time or sleep time)
  showInfo: false,
  sleepTimes: [], // Calculated single best sleep time
  wakeUpTimes: [], // Array of possible wake-up times
};

// Reducer Function
function sleepReducer(state, action) {
  switch (action.type) {
    case 'setUserGender':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          gender: action.payload,
        },
      };
    case 'setUserAge': // This case appears redundant with setUserProfile but kept as requested
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          age: action.payload,
        },
      };
    case 'setCalculationType':
      return {
        ...state,
        calculationType: action.payload,
      };
    case 'setQueryTime':
      return {
        ...state,
        queryTime: action.payload,
      };

    case 'setSleepTimes': {
      const {
        queryTime,
        userProfile: { gender },
      } = state;
      const sleepCycle = 90; // 90 minutes per cycle
      const totalCycles = 6; // 6 cycles = 9 hours of sleep
      const fallAsleepTime = 15; // 15 minutes to fall asleep
      const genderAdjustment =
        gender === 'female' ? 20 : 0; // Add 20 minutes for females

      // Parse wake-up time to minutes
      const [wakeHour, wakeMinute] = queryTime
        .split(':')
        .map(Number);
      const wakeTimeInMinutes =
        (wakeHour * 60 + wakeMinute) % 1440;

      // Calculate sleep times in reverse (subtract 90-minute cycles + 15 mins to fall asleep)
      const sleepTimes = [];
      for (let i = 1; i <= totalCycles; i++) {
        const sleepTimeInMinutes =
          wakeTimeInMinutes -
          i * sleepCycle -
          fallAsleepTime -
          genderAdjustment;
        const sleepHour = Math.floor(
          ((sleepTimeInMinutes + 1440) % 1440) /
            60,
        );
        const sleepMinute =
          (sleepTimeInMinutes + 1440) % 60;
        sleepTimes.push(
          `${String(sleepHour).padStart(
            2,
            '0',
          )}:${String(sleepMinute).padStart(
            2,
            '0',
          )}`,
        );
      }

      return {
        ...state,
        sleepTimes,
      };
    }

    case 'setWakeUpTimes': {
      const {
        userProfile: { gender },
      } = state;
      const sleepCycle = 90; // 90 minutes per cycle
      const totalCycles = 6; // 6 cycles = 9 hours of sleep
      const fallAsleepTime = 15; // 15 minutes to fall asleep
      const genderAdjustment =
        gender === 'female' ? 20 : 0; // Add 20 minutes for females

      // Get the current time
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes =
        (currentHour * 60 + currentMinute) % 1440;

      // Calculate wake-up times (add 90-minute cycles + 15 mins to fall asleep)
      const wakeUpTimes = [];
      for (let i = 1; i <= totalCycles; i++) {
        const wakeTimeInMinutes =
          currentTimeInMinutes +
          i * sleepCycle +
          fallAsleepTime +
          genderAdjustment;
        const wakeHour = Math.floor(
          (wakeTimeInMinutes % 1440) / 60,
        );
        const wakeMinute = wakeTimeInMinutes % 60;
        wakeUpTimes.push(
          `${String(wakeHour).padStart(
            2,
            '0',
          )}:${String(wakeMinute).padStart(
            2,
            '0',
          )}`,
        );
      }

      return {
        ...state,
        wakeUpTimes,
      };
    }

    default:
      return state;
  }
}

const SleepContext = createContext();

export function SleepProvider({ children }) {
  const [
    {
      userProfile: { age, gender }, // User's age and gender
      calculationType,
      queryTime,
      sleepTimes,
      wakeUpTimes,
      showInfo,
    },
    dispatch,
  ] = useReducer(sleepReducer, initialState);

  return (
    <SleepContext.Provider
      value={{
        age,
        gender,
        calculationType,
        queryTime,
        sleepTimes,
        wakeUpTimes,
        showInfo,
        dispatch,
      }}
    >
      {children}
    </SleepContext.Provider>
  );
}

export function useSleepContext() {
  return useContext(SleepContext);
}
