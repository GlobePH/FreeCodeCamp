const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItem (name, quantity, lat, lng) {
  return {
    type: ADD_ITEM,
    name,
    quantity,
    lat,
    lng
  }
}

export function removeItem () {
  return {
    type: REMOVE_ITEM
  }
}

const DEFAULT_STATE = {
  cart: []
}

const cartReducer = (state = DEFAULT_STATE.cart, action) => {
  if (action.type === ADD_ITEM) {
    return [...state, {
      name: action.name,
      quantity: action.quantity,
      lat: action.lat,
      lng: action.lng
    }]
  }
  return state
}

export default cartReducer
