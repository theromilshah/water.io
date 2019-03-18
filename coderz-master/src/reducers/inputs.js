import { ADD_INPUT } from "../constants/actionTypes";

export const initialState = {
  state: "",
  district: "",
  block: "",
  year: ""
};

export default function productOptions(state = initialState, action) {
  switch (action.type) {
    case ADD_INPUT:
      return {
        state: action.state,
        district: action.district,
        block: action.block,
        year: action.year
      };
    default:
      return state;
  }
}
