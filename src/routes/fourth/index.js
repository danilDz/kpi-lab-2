function GET(req, res, url, payload) {
  res.json({ message: 'fourth GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };
