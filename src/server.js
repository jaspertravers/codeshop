import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// import { exec } from 'child_process';
import fs from 'fs';
// exec('fs', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });
const app = polka();

// @TODO:
//  - send over test
//  - run test through jest
//  - return results
app
  .post('/test', (req, res) => {
    console.log(req.body);
    fs.writeFileSync("./tmp/test.js", req.body);
    res.end();
  })

app // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
