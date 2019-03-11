
const responderEngine = (res, html, extension) => {
  switch (extension) {
    case 'html':
      res.send(html);
      break;
    case 'pdf':
      res.pdfFromHTML({ fileName: 'example.pdf',  htmlContent: html});
      break;
  }
};

module.exports = { responderEngine };