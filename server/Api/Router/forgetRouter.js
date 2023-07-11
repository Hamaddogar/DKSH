require('dotenv').config()
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const UserForgot = require('../../Database/model/forgotModel');
const jwt = require('jsonwebtoken');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SYSTEM_EMAIL,
    pass: process.env.SYSTEM_EMAIL_PASSWORD,
  }
});

const URL = 'https://dkshs-v2-56e538e53ee1.herokuapp.com/reset/';
// const URL = 'http://localhost:3000/reset/';

router.post('/', async (req, res) => {
  const secretKey = 'your-secret-key'; // Replace with your own secret key
  const token = jwt.sign({ email: req.body.email }, secretKey, { expiresIn: '30m' });

  try {

    const mailSenderFunction = async (mail, token) => {
      let mailOptions = {
        from: { name: 'DKSHS Forgot Password', address: 'address' },
        to: `${mail}`,
        subject: 'DKSHS Forgot Password Request',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          URL + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n',
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send({ success: false, message: 'Error to send Mail' });
        } else {
          console.log('Email sent: ' + info.response);
          res.send({ success: true, message: 'Your e-mail has been sent.' });
        }
      });
    }

    const userForgot = new UserForgot({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 3600000,
      email: req.body.email,
    });

    await userForgot
      .save()
      .then(() => {
        mailSenderFunction(req.body.email, token);
      })
      .catch((err) => {
        res.status(500).send({ 'message': 'Internal Server Error' })
      });
  } catch (error) {
    res.status(500).send({ 'message': 'Internal Server Error' })
  }

});

module.exports = router;
