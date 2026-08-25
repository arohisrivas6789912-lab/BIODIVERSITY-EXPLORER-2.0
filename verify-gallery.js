const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
const start = text.indexOf('const nationalParks = ');
const end = text.indexOf('const parkCosts = ');
if (start === -1 || end === -1 || end <= start) {
  console.error('Could not locate nationalParks array in script.js');
  process.exit(1);
}

const arrayText = text.slice(start + 'const nationalParks = '.length, end).trim();
const parks = Function(`return (${arrayText});`)();
const missing = [];

for (const park of parks) {
  const g = Array.isArray(park.gallery) ? park.gallery : [];
  if (g.length !== 5) missing.push(`${park.name}: gallery count ${g.length}`);
  if ([...new Set(g)].length !== 5) missing.push(`${park.name}: duplicate or empty entries`);
  if (park.image && !g.includes(park.image)) missing.push(`${park.name}: original cover missing from gallery`);
  for (const img of g) {
    if (!img || img.startsWith('http')) continue;
    const full = path.join(__dirname, img);
    if (!fs.existsSync(full)) missing.push(`${park.name}: missing ${img}`);
  }
}

if (missing.length) {
  console.log('VALIDATION FAIL');
  console.log(missing.join('\n'));
  process.exit(1);
}

console.log(`VALIDATION PASS: ${parks.length} parks checked. Each has 5 unique gallery entries and all referenced files exist.`);
for (const park of parks) {
  console.log(`${park.name}: ${park.gallery.join(' | ')}`);
}
