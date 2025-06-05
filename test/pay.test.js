const http = require('http');
const app = require('../server');
const assert = require('assert');

const PORT = 3050;
const server = app.listen(PORT, () => {
  const data = JSON.stringify({ amount: 5, currency: 'USD' });
  const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/api/pay',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };
  const req = http.request(options, res => {
    assert.equal(res.statusCode, 200);
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const json = JSON.parse(body);
      assert.ok(json.paymentId);
      server.close(() => process.exit(0));
    });
  });
  req.on('error', err => {
    console.error(err);
    server.close(() => process.exit(1));
  });
  req.write(data);
  req.end();
});
