// generate-images-json.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'images');
const exts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  const images = files
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .filter(f => f); // Remove empty strings
  fs.writeFileSync(
    path.join(dir, 'images.json'),
    JSON.stringify(images, null, 2)
  );
  console.log('images.json generated with', images.length, 'images.');
});