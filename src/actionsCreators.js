import {LOG_IN} from './actions'

export function logIn(userID) {
  return {type: LOG_IN, payload: userID}
}