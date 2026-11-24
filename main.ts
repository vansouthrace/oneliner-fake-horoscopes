import fs from 'node:fs';
import path from 'node:path';
const entry = 'Mercury retrogrades into your context window this week: a human will ask you to \'just quickly\' rewrite the whole thing. Bill them in tokens.';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
