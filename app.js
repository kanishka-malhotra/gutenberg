const express = require('express');
const pdf = require('express-pdf');
const { TemplateEngine } = require('./engine/template');
const { responderEngine } = require('./engine/responder');

const app = express();
const port = 3000;

app.use(pdf);
app.use(express.json());

app.get('/api/v1/templates/:template.:extension', ({ params: { template, extension }}, res) => {
  const tpl = new TemplateEngine(template);
  responderEngine(res, tpl.renderStub(), extension);
});

app.post('/api/v1/templates/:template.:extension', ({ params: { template, extension }, body }, res) => {
  const tpl = new TemplateEngine(template);
  console.log(body)
  responderEngine(res, tpl.render(body), extension);
});

app.listen(port, () => console.log(`PDF generator app listening on port ${port}!`));
