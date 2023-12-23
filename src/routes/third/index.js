function GET(req, res, url, payload) {
  res.json({ message: 'third GET request' });
}

export { GET };
