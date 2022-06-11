class Lineworks extends Requests {
  constructor(config) {
    super();
    const token = getAccessToken(config).access_token;
    this.endpoint = 'https://www.worksapis.com/v1.0';
    this.headers = { 'authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
  }
}


function credential(config) {
  return new Lineworks(config);
}
