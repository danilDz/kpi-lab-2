function GET(req, res, url, payload) {
  res.json({ message: 'fourth GET request' });
}

export { GET };
