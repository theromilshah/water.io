const endpointUrl = "http://localhost:3001";

export const getAllUser = (email, password) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mailid: email, password })
    })
      .then(res => {
        const text = res.text();
        return text.then(value => {
          console.log(value);
          return resolve(JSON.parse(value));
        });
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};
export const getAllUser = () => {};
