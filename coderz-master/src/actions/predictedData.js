import {
  GET_GROUND_WATER_PREDICTED_VALUE,
  GET_DEPTH_VALUE
} from "../constants/actionTypes";
import { getGroundWaterPredictions } from "../services/getPredictedData";
import getDepthData from "../services/getDepthData";

export const getPredictedDataForGroundWater = (
  state,
  district,
  block,
  endYear
) => dispatch => {
  return getGroundWaterPredictions(state, district, block, endYear).then(
    predictions => {
      return dispatch({
        type: GET_GROUND_WATER_PREDICTED_VALUE,
        groundWaterValues: predictions
      });
    }
  );
};

export const getDepthDataForGroundWater = (
  state,
  district,
  block
) => dispatch => {
  return getDepthData(state, district, block).then(depthValue => {
    return dispatch({
      type: GET_DEPTH_VALUE,
      depthValue
    });
  });
};
