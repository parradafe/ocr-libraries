'use strict'
const fs = require("fs");
const { TesseractWorker } = require("tesseract.js");
const worker = new TesseractWorker();

fs.readFile('plain-text.png',async(err, data) => {
    if (err) {
        console.log('[ERR]', err);
        process.exit(1);
    }

    worker
        .recognize(data, "spa")
        .progress(progress => {
            console.log(`${progress.progress * 100}% de avance`);
        })
        .then(result => {
            console.log('******************************************************************************');
            console.log('[*]', result.text);
            console.log('******************************************************************************');
        });
});