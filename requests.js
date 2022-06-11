/**
 * API コール用のリクエストをラッパーしたもの
 */
class Requests {
  constructor(endpoint, headers) {
    this.endpoint = endpoint;
    this.headers = headers || {};
  }

  _sendRequest(params) {
    const options = {
      'method': params.method || 'get',
      'headers': this.headers,
      'payload': JSON.stringify(params.payload) || {}
    }

    const response = UrlFetchApp.fetch(this.endpoint + params.path, options);
    if (200 <= response.getResponseCode() && response.getResponseCode() <= 204) {
      return response.getContentText();
    }

    return false;
  }

  get_(path, data = {}) {
    const queryStrings = [];
    for (let key of Object.keys(data)) {
      queryString.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
    }

    if (queryStrings.length > 0) {
      url += `?${queryStrings.join('&')}`;
    }

    return this._sendRequest({
      'path': path,
      'method': 'get',
    });
  }

  post_(path, data = {}) {
    return this._sendRequest({
      'path': path,
      'method': 'post',
      'payload': data
    });
  }

  put_(path, data = {}) {
    return this._sendRequest({
      'path': path,
      'method': 'put',
      'payload': data
    });
  }

  patch_(path, data = {}) {
    return this._sendRequest({
      'path': path,
      'method': 'patch',
      'payload': data
    });
  }

  delete_(path, data = {}) {
    return this._sendRequest({
      'path': path,
      'method': 'delete',
      'payload': data
    });
  }
}
