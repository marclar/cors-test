const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': [
    'Content-Type',
    'X-Amz-Date,Authorization',
    'X-Amz-Security-Token',
    'X-Api-Key'
  ].join(',')
};

const usingObjectAssign = async (req, res) => {
  console.log(`---------> usingObjectAssign, req.method: ${req.method}`);
  Object.assign(res.headers, CORS_HEADERS);
  console.log(`---------> usingObjectAssign AFTER setting headers`, {
    req: req.headers,
    res: res.headers
  });
  res.json({ok: true});
};

const usingResSet = async (req, res) => {
  console.log(`---------> usingResSet, req.method: ${req.method}`);
  res.set(CORS_HEADERS);
  console.log(`---------> usingResSet AFTER setting headers`, {
    req: req.headers,
    res: res.headers
  });
  res.json({ok: true});
};

module.exports = {
  usingObjectAssign,
  usingResSet
};
