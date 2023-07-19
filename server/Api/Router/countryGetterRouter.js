// const { default: axios } = require('axios');
const express = require('express');
const countryGetterRouter = express.Router();
const { Country } = require('country-state-city');
const geoip = require('geoip-lite');

countryGetterRouter.get('/', async (req, res) => {
  const ip = req.ip;
  try {

    // const ip = req.ip; // Get the requester's IP address
    const geo = geoip.lookup(ip); // Look up the geographic information for the IP address

    if (geo && geo.country) {
      const countryCode = geo.country;
      const country = Country.getCountryByCode(countryCode);
      const countryName = country ? country.name : 'Unknown';

      res.send({ success: true, country: countryName });
    }

    res.send({ success: true, geo, ip });



  } catch (error) {
    res.status(500).send({error })
  }

});

module.exports = countryGetterRouter;
