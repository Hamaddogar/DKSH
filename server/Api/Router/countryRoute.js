const { default: axios } = require('axios');
const express = require('express');
const countryGetter = express.Router();

countryGetter.get('/country', async (req, res) => {
  const ipAddress =
    req.headers['cf-connecting-ip'] ||
    req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress || req.ip || ''; // Get the client's IP address
  try {
    const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
    res.send({ success: true, countryName: response?.data?.country });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = countryGetter;
