const LOG_IN = 'LOG_IN'

export function loginAction () {
  return {
    type: LOG_IN
  }
}

const DEFAULT_STATE = {
  authenticated: false
}

const loginReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === LOG_IN) {
    return true;
  }
}

export const loginReducer;
