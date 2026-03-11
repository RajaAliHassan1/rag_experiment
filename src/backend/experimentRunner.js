const loadPDF = require("./pdfLoader");
const chunkText = require("./chunker");

async function runExperiment() {

  const chunkSizes = [20, 50, 100];

  const text = await loadPDF("./src/data/documents/cancellationDoc.pdf");

  let results = [];

  for (const size of chunkSizes) {

    const chunks = chunkText(text, size);

    console.log("Chunk size:", size);
    console.log("Chunks created:", chunks.length);

    console.log("Conole cunks whole")
    console.log(chunks)

    results.push({
      chunkSize: size,
      chunksCreated: chunks.length,
      chunksText : chunks,
    });

  }

  return results;
}

module.exports = runExperiment;