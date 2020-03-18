const pdfFromHtmlOptions = {
  phantomArgs: ['--local-url-access=false'],      // To avoid vulnerability https://www.npmjs.com/advisories/1095
  config: {
    format: 'A4',
    orientation: 'portrait',
  },
};

module.exports = {
  pdfFromHtmlOptions,
};