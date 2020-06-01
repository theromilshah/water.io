import Files from "../deep.json";
import filter from "lodash/filter";
import isEqual from "lodash/isEqual";
import forEach from "lodash/forEach";

const getDepthData = (state, district, block) => {
  return new Promise((resolve, reject) => {
    const stateFilter = filter(Files.Worksheet, object => {
      return isEqual(object.STATE.toLowerCase(), state.toLowerCase());
    });
    const districtFilter = filter(stateFilter, object => {
      return isEqual(object.DISTRICT.toLowerCase(), district.toLowerCase());
    });
    const blockFilter = filter(districtFilter, object => {
      return isEqual(object.BLOCK.toLowerCase(), block.toLowerCase());
    });
    const data = {
      labels: ["70-90", "90-110", "110-130", "130-150", ">150"]
    };
    const series = [];
    forEach(blockFilter, obj => {
      series.push(obj.TOTAL);
    });
    data.series = series;
    return resolve(data);
  });
};

export default getDepthData;
