function GET(req, res, url, payload) {
  throw 'unhandled error';
  res.json({ message: 'test' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };
