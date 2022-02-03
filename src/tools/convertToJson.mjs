import * as fs from 'fs';
import * as rl from 'readline';

// turn into async and maybe load into memory.

(() => {
  const files = fs.readdirSync('./items');
  files.forEach((file) => {
    const readInterface = rl.createInterface({
      input: fs.createReadStream(`./items/${file}`, 'utf8'),
    });
    const json = {};
    let processingItemData = false;
    let curItem = '';
    readInterface
      .on('line', (line) => {
        if (line.includes('}') || line.includes('*')) {
          processingItemData = false;
          return;
        }
        if (line.match(/item\s[A-z0-9]*/g)) {
          processingItemData = true;
          curItem = line.replace(/\s*item\s*/g, '');
          json[curItem] = {};
          json[curItem][['Key']] = curItem;
          return;
        }
        if (processingItemData && !line.includes('{')) {
          const [category, info] = line.replace(/\s*,*/g, '').split('=');
          json[curItem][category] = info;
        }
      })
      .on('close', () => {
        fs.mkdirSync('./data', { recursive: true });
        fs.writeFileSync(`./data/${file}.json`, JSON.stringify(json), 'utf-8');
      });
  });
})();
