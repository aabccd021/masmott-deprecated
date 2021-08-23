import * as fs from 'fs';

const typeDir = './src/type';

fs.readdirSync(typeDir, { withFileTypes: true }).forEach((x) => {
  if (x.isDirectory()) {
    const unionDirName = `${typeDir}/${x.name}`;
    const [imports, ...types] = fs
      .readFileSync(`${unionDirName}/_union.ts`, { encoding: 'utf-8' })
      .split('export type ');
    const newImports = imports?.split(';').join(';');
    const newTypes = types.map((t) => {
      const [name, st] = t.split(' = ');
      const newSt = [
        `readonly _type: ${name}`,
        st?.replace(/{/g, '').replace(/};/g, '').split(';'),
      ].join('\n');
      return `export type Type = {${newSt}}`;
    });
    fs.writeFileSync(
      `${unionDirName}/temp.json`,
      JSON.stringify({ newImports, newTypes }, undefined, 2)
    );
  }
});
