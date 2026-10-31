import fs from 'fs';

const code = fs.readFileSync('src/data/portfolio.js', 'utf8');
const urls = code.match(/https?:\/\/[^\s"',]+/g) || [];
console.log('Unique URLs in portfolio.js:');
Array.from(new Set(urls)).forEach(u => console.log(' - ' + u));

