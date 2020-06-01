import { ADD_INPUT } from "../constants/actionTypes";

export const updateInputDetails = (
  state,
  district,
  block,
  year
) => dispatch => {
  dispatch({
    type: ADD_INPUT,
    state: state,
    district: district,
    block: block,
    year: year
  });
};
