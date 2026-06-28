const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

(async () => {
  const pdfPath = path.join(__dirname, 'ilide.info-losungsschlussel-exakt-1-pr_d2f4dd942c47bcf2a0c92ed80228b201.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  let fullText = '';
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str).join(' ');
    fullText += `\n--- PAGE ${pageNum} ---\n${strings}\n`;
  }
  console.log(fullText.slice(0, 30000));
})();
