const { default: axios } = require('axios');
const express = require('express');
const countryGetter = express.Router();
const { lookup } = require('geoip-lite');
const countryList = require('country-list');

countryGetter.get('/country', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip); // ip address of the user
    const data = await lookup(ip);

    if (!data) {
      throw new Error('IP address not found in the GeoIP database');
    }

    const countryCode = data.country;
    const countryName = countryList.getName(countryCode);

    if (!countryName) {
      throw new Error('Country code not found in the country list');
    }

    res.send({ success: true, countryName });
    // location of the user
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = countryGetter;
