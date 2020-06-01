const endpointUrl = "http://127.0.0.1:5000";

export const getGroundWaterPredictions = (state, district, block, endYear) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/predict`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http:/127.0.0.1:5000",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({
        state: "RJ",
        district: "Ajmer",
        block: "Arain",
        endYear
      })
    })
      .then(res => {
        console.log(res);
        const text = res.json();
        console.log(text);
        return text.then(value => {
          console.log(value);
          return resolve(value);
        });
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};
