import {
  GET_GROUND_WATER_PREDICTED_VALUE,
  GET_DEPTH_VALUE
} from "../constants/actionTypes";

export const initialState = {
  groundWaterValues: [],
  depthValue: []
};

export default function predictedDataState(state = initialState, action) {
  switch (action.type) {
    case GET_GROUND_WATER_PREDICTED_VALUE:
      return {
        ...state,
        groundWaterValues: action.groundWaterValues
      };
    case GET_DEPTH_VALUE:
      return {
        ...state,
        depthValue: action.depthValue
      };
    default:
      return state;
  }
}
