import {
  createContext,
  useContext,
  useReducer,
} from 'react';

// Initial State
const initialState = {
  userProfile: { age: null, gender: null }, // User's age and gender
  calculationType: 'sleepTime', // "sleepTime" or "wakeUpTime"
  queryTime: null, // Input time (wake-up time or sleep time)
  sleepTime: null, // Calculated single best sleep time
  wakeUpTimes: [], // Array of possible wake-up times
};

// Reducer Function
function sleepReducer(state, action) {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
      };
    case 'SET_CALCULATION_TYPE':
      return {
        ...state,
        calculationType: action.payload,
      };
    case 'SET_QUERY_TIME':
      return {
        ...state,
        queryTime: action.payload,
      };
    case 'SET_SLEEP_TIME':
      return {
        ...state,
        sleepTime: action.payload,
      };
    case 'SET_WAKE_UP_TIMES':
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
