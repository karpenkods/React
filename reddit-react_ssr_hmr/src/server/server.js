import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import indexHtmlTemplate from './indexHtmlTemplate';
import { App } from '../App';
import axios from 'axios';

const app = express();

const PORT = process.env.PORT || 3000;

const AppElement = createElement(App);

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: 'T7bL562g3V8-dsMY906OMhebpnzGkA' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(
        indexHtmlTemplate(
          renderToString(AppElement),
          data['access_token']
        ),
      );
    })
    .catch(console.log)
});

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(
      renderToString(AppElement),
    ),
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});