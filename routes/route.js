const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const openai = require('openai');

const router = express.Router();
const client = new openai.OpenAI(process.env.OPENAI_API_KEY);

router.use(express.urlencoded({ extended: false }));

router.post('/webhook', async (req, res) => {
  const message = req.body.Body;
  const response = await client.createChatCompletion({
    model: 'text-davinci-003',
    messages: [{ role: 'system', content: 'User: ' + message }],
  });
  const botMessage = response.data.choices[0].message.content;

  const twiml = new MessagingResponse();
  twiml.message(botMessage);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = router;
