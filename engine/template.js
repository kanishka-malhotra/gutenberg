const hbs = require('handlebars');
const fs = require('fs');

const getFile = (path) =>
  fs.readFileSync(path, 'utf8');

class TemplateEngine {
  constructor(templateName) {
    this.templateName = templateName;
    this.hbs = hbs.create();
    this.template = getFile(`templates/${this.templateName}/main.hbs`);
    this.getPartials();
  }

  getPartials() {
    const baseDir = `templates/${this.templateName}/partials`;
    const partialNames = fs.readdirSync(baseDir);
    partialNames.map(x => this.hbs.registerPartial(x, getFile(`${baseDir}/${x}`)));
  }

  render(context) {
    return this.hbs.compile(this.template)(context);
  }

  renderStub() {
    return this.render(require(`../templates/${this.templateName}/data.json`));
  }
}

module.exports = { TemplateEngine };