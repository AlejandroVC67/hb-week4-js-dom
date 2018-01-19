export default class DataRetriever {
  static get (url, callback) {
    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener('load', (response) => {
    //   callback(response.currentTarget.response)
    // });
    // oReq.responseType = 'json'
    // oReq.open('GET', url);
    // oReq.send();
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then(callback)
  }
}
