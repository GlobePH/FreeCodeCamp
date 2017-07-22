const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"

export function addItem() {
  return {
    type: ADD_ITEM
  }
}

export function removeItem () {
  return {
    type: REMOVE_ITEM
  }
}

const DEFAULT_STATE = {
  items: []
}

const cartReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === ADD_ITEM) {
    return [...state.items, {
      name: action.name,
      quantity: action.quantity
    }]
  }
  return state
}

export default cartReducer
