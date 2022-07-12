import { createStore } from "redux";
import { products } from '../data.json';

const initialState = {
  isOpen: false,
  selectedOrder: '',
  sortedProducts: products,
  products
};

const reducer = (state = initialState, { value, type }) => {
  switch (type) {
    case "isOpen":
      return { ...state, isOpen: !state.isOpen };
    case "selectedOrder":
      return {
        ...state,
        selectedOrder: value,
        sortedProducts: state.products
          .sort((a, b) => {
            if (value === 'highest') {
              return b.price - a.price
            } else if (value === 'lowest') {
              return a.price - b.price
            }
            return 0;
          })
      };
    case "removeSelectedOrder":
      return {
        ...state,
        selectedOrder: state.selectedOrder.filter(({ id }) => id !== value)
      }
    default:
      return { ...state }
  }
}

export let store = createStore(reducer);