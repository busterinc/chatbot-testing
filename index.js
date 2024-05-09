require('dotenv').config();
const express = require('express');
const routes = require('./services/routes'); // Importa las rutas desde routes.js

const app = express();
const port = process.env.PORT || 3000;

app.use(routes); // Usa las rutas definidas en routes.js

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// require('dotenv').config();
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const openai = require('openai');

// const app = express();
// const port = process.env.PORT || 3000;

// const client = new openai.OpenAI(process.env.OPENAI_API_KEY); // Cambiado a new openai.OpenAI()

// app.use(express.urlencoded({ extended: false }));

// app.post('/webhook', async (req, res) => {
//   const message = req.body.Body;
//   const response = await client.createChatCompletion({
//     model: 'text-davinci-003',
//     messages: [{ role: 'system', content: 'User: ' + message }],
//   });
//   const botMessage = response.data.choices[0].message.content;

//   const twiml = new MessagingResponse();
//   twiml.message(botMessage);

//   res.writeHead(200, { 'Content-Type': 'text/xml' });
//   res.end(twiml.toString());
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
