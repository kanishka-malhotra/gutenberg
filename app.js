const express = require('express');
const { renderStub } = require('./engine/template');

const app = express();
const port = 3000;

app.get('/api/v1/templates/:template.:extension', ({ params: { template, extension }}, res) =>
  res.send(renderStub(template)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
