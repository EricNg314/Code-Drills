require("dotenv").config();
const twilio = {
  id: process.env.TWILIO_ID,
  secret: process.env.TWILIO_TOKEN,
  number: process.env.PHONE_NUMBER
};

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = twilio.id;
const authToken = twilio.secret;
const client = require('twilio')(accountSid, authToken);

const myNumber = twilio.number;

client.messages
  .create({
     body: 'https://www.twilio.com/docs/usage/api',
     from: twilio.number,
     mediaUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
     to: myNumber
   })
  .then(message => console.log("Message successfully sent! - " + message.sid))
  .done();