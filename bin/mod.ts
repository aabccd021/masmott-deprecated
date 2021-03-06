import { _ } from 'kira-pure';

import { fs, I } from '../src/kira/mod';

const sourceTypeDir = './src/entity';
// const compiledTypeDir = './src/__type';

_(sourceTypeDir)
  ._(fs.readDirSync)
  ._(I.map((dirent) => dirent))
  ._(I.log)
  // ._(I.map((dirents) => {}))
  ._(I.invoke)
  ._v();

// fs.readdirSync(sourceTypeDir, { withFileTypes: true }).forEach((unionDirCandidate) => {
//   if (unionDirCandidate.isDirectory()) {
//     const unionDirName = `${sourceTypeDir}/${unionDirCandidate.name}`;
//     const [imports, ...types] = fs
//       .readFileSync(`${unionDirName}/_union.ts`, { encoding: 'utf-8' })
//       .split('export type ');
//     const lines = imports?.split(';');
//     const news = lines
//       ?.filter((s) => s.includes('_'))
//       .flatMap(
//         (s) =>
//           s
//             .replace('import ', '')
//             .replace('* as ', '')
//             .replace('{', '')
//             .replace('}', '')
//             .replace(/\n/g, '')
//             .split('from')[0]
//             ?.replace(/ /g, '')
//             ?.split(',') ?? []
//       );
//     const newImports = `import {${news?.join(',')}} from '../mod.s';${lines
//       ?.filter((s) => !s.includes('_'))
//       .join('\n')}`;
//     types.forEach((t) => {
//       const [name, st] = t.split(' = ');
//       if (name === undefined) {
//         return;
//       }
//       const content = `${newImports}\nexport type Type = {${[
//         '',
//         `readonly _type: '${name}'`,
//         st
//           ?.replace(/{/g, '')
//           .replace(/};/g, '')
//           .replace(/\n/g, '')
//           .split(';')
//           .filter((x) => x !== '')
//           .map((x) => {
//             const [, name, t] = x
//               .replace(':', '')
//               .split(' ')
//               .filter((x) => x !== '');
//             return `${name}: ${
//               news?.includes(t ?? '') || news?.includes(t?.split('.')[0] ?? '') ? `${t}.Type` : t
//             }`;
//           }),
//       ].join('\n')}}`;

//       fs.writeFileSync(`${unionDirName}/${lowerFirst(name)}.s.ts`, content);
//     });
//     const unionImport = types
//       .map((t) => {
//         const [name] = t.split(' = ');
//         return `import * as ${name ?? ''} from './${lowerFirst(name ?? '')}.s';`;
//       })
//       .join('');
//     const unionType = types
//       .map((t) => {
//         const [name] = t.split(' = ');
//         return `${name}.Type`;
//       })
//       .join('|');

//     fs.writeFileSync(
//       `${unionDirName}/mod.s.ts`,
//       `${unionImport}
//     export type Type = ${unionType}
//     `
//     );
//   }
// });

// exec('yarn lint --fix');
