import { actionCreators } from '../constants';

export const buttonClicked = (value) => {
if (value === '=') {
  return { type: actionCreators.ACTION_EVALUATE };
}
return {
    type: actionCreators.ACTION_BUTTON_CLICKED,
    payload: value
  };
};
export const foundSymbol = (sym) => (
  {
     type: actionCreators.ACTION_FOUND_SYMBOL,
      payload: sym
  }
);
export const foundNumber = (val) => (
   {
      type: actionCreators.ACTION_FOUND_NUMBER,
      payload: val
  }
);
