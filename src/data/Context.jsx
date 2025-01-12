import {
  createContext,
  useContext,
  useReducer,
} from 'react';

// Initial State
const initialState = {
  userProfile: { age: 0, gender: 'male' }, // User's age and gender
  calculationType: 'sleepTime', // "sleepTime" or "wakeUpTime"
  queryTime: '08:00', // Input time (wake-up time or sleep time)
  showInfo: false,
  sleepTime: null, // Calculated single best sleep time
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

    case 'setSleepTime':
      return {
        ...state,
        sleepTime: action.payload,
      };
    case 'setWakeUpTimes':
      return {
        ...state,
        wakeUpTimes: action.payload,
      };
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
      sleepTime,
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
        sleepTime,
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
