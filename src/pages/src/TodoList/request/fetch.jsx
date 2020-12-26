export const request = async function loadList(
  route,
  data,
  method = 'Get',
  body,
) {
  let invariabilityUrl = `http://localhost:3000`;
  if (method !== 'Get') {
    if (method === 'Post') {
      invariabilityUrl = `http://localhost:3000/` + route;
    } else {
      invariabilityUrl = `http://localhost:3000/` + route + '?';
      for (let keys in data) {
        if (data.hasOwnProperty(keys)) {
          invariabilityUrl = invariabilityUrl + keys + '=' + data[keys] + '&';
        }
      }

      invariabilityUrl =
        invariabilityUrl.substring(invariabilityUrl.length - 1) == '&'
          ? invariabilityUrl.substring(0, invariabilityUrl.length - 1)
          : invariabilityUrl;
    }
  }
  console.log(invariabilityUrl);
  return await fetch(invariabilityUrl, {
    headers: {
      'content-type': 'application/json',
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    body: body, // no-cors, cors, *same-origin
  })
    .then(response => response.json())

    .then(json => {
      console.log('数据：：：：', json);
      return json;
    })
    .catch(err => {
      return err;
    });
};
