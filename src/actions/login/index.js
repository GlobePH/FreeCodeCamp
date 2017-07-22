const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export function logoutAction() {
  return {
    type: LOG_OUT
  };
}

export function loginAction() {
  return {
    type: LOG_IN
  };
}

const DEFAULT_STATE = {
  authenticated: false,
};

const loginReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === LOG_IN) {
    return {
      authenticated: true
    };
  } else if (action.type === LOG_OUT) {
    return {
      authenticated: false
    };
  }
  return state;
};

export default loginReducer;
