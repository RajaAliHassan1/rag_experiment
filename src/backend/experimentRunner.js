const loadPDF = require("./pdfLoader");
const chunkText = require("./chunker");

async function runExperiment() {

  const chunkSizes = [200, 500, 1000];

  const text = await loadPDF("./src/data/documents/GUIDE ME Blind Assistance Report.pdf");

  let results = [];

  for (const size of chunkSizes) {

    const chunks = chunkText(text, size);

    console.log("Chunk size:", size);
    console.log("Chunks created:", chunks.length);

    results.push({
      chunkSize: size,
      chunksCreated: chunks.length
    });

  }

  return results;
}

module.exports = runExperiment;