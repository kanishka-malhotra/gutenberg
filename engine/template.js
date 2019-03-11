const hbs = require('handlebars');
const fs = require('fs');

const getFile = (path) =>
  fs.readFileSync(path, 'utf8');

const getTemplate = (templateName) =>
  getFile(`templates/${templateName}/main.hbs`);

const getPartials = (templateName) => {
  const baseDir = `templates/${templateName}/partials`;
  fs.readdir(baseDir, (err, items) => {
    items.map(x => console.log(getFile(`${baseDir}/${x}`)))
  });
};

const compileTemplate = (templateName) => {
  const partials = getPartials(templateName);
  return hbs.compile(getTemplate(templateName));
};

const render = (templateName, context) =>
  compileTemplate(templateName)(context);

const renderStub = (templateName) =>
  render(templateName, require(`../templates/${templateName}/data.json`))

module.exports = { render, renderStub };