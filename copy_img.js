const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'MIS.jpeg');
const dst = path.join(__dirname, 'study-dashboard', 'public', 'MIS.jpeg');

try {
    fs.copyFileSync(src, dst);
    console.log(`Successfully copied ${src} to ${dst}`);
} catch (err) {
    console.error(`Error: ${err.message}`);
}
