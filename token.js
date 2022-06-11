const getAccessToken = (config) => {
  const time = Date.now();
  const header = Utilities.base64Encode(JSON.stringify({ 'alg': 'RS256', 'typ': 'JWT' }));
  const claimSet = Utilities.base64Encode(JSON.stringify({
    'iss': config.CLIENT_ID,
    'sub': config.SERVICE_ACCOUNT,
    'iat': Math.floor(time / 1000),
    'exp': Math.floor(time / 1000 + 3600)
  }));
  const signature = Utilities.base64Encode(Utilities.computeRsaSha256Signature(`${header}.${claimSet}`, config.PRIVATE_KEY));
  const jwt = `${header}.${claimSet}.${signature}`;

  const endpoint = 'https://auth.worksmobile.com/oauth2/v2.0/token';
  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    payload: {
      'assertion': jwt,
      'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      'client_id': config.CLIENT_ID,
      'client_secret': config.CLIENT_SECRET,
      'scope': config.SCOPE
    }
  }
  return JSON.parse(UrlFetchApp.fetch(endpoint, options));
}
