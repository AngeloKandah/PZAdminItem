import * as fs from 'fs';
import * as rl from 'readline';

(function () {
  const files = fs.readdirSync('./items');
  files.forEach((file) => {
    const readInterface = rl.createInterface({
      input: fs.createReadStream(`./items/${file}`, 'utf8'),
    });
    const curItem = {};
    let processingItem = false;
    let itemName = '';
    readInterface
      .on('line', (line) => {
        if (line.includes('}') || line.includes('*')) {
          processingItem = false;
        }
        if (line.match(/item\s[A-z0-9]*/g)) {
          processingItem = true;
          itemName = line.replace(/\s*item\s*/g, '');
          curItem[itemName] = {};
        }
        if (processingItem && !line.includes('{')) {
          const [category, info] = line.replace(/\s*/g, '').split('=');
          curItem[itemName][category] = info;
        }
      })
      .on('close', () => {
        if (!fs.existsSync('./data')) {
          fs.mkdirSync('./data');
        }
        fs.writeFileSync(
          `./data/${file}.json`,
          JSON.stringify(curItem),
          'utf-8'
        );
      });
  });
})();
