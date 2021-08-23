import { exec } from 'child_process';
import * as fs from 'fs';
import { _, IO } from 'kira-pure';

import { I } from '../src/kira/mod';

function lowerFirst(string: string): string {
  const [f, ...rest] = string;
  return [f?.toLowerCase(), ...rest].join('');
}

type DirentType = 'file' | 'directory' | 'etc';

type Dirent = {
  readonly name: string;
  readonly type: DirentType;
};

function readDir(dir: string): IO<readonly Dirent[]> {
  return () =>
    fs.readdirSync(dir, { withFileTypes: true }).map((d) => ({
      name: d.name,
      type: d.isDirectory() ? 'directory' : d.isFile() ? 'file' : 'etc',
    }));
}

function readFile(path: string): IO<string> {
  return () => fs.readFileSync(path, { encoding: 'utf-8' });
}

function writeFile(path: string): (content: string) => IO<void> {
  return (content) => () => fs.writeFileSync(path, content);
}

const sourceTypeDir = './src/_type';
const compiledTypeDir = './src/__type';

_(sourceTypeDir)
  ._(readDir)
  ._(I.map((dirents) => {}))
  ._v();

fs.readdirSync(sourceTypeDir, { withFileTypes: true }).forEach((unionDirCandidate) => {
  if (unionDirCandidate.isDirectory()) {
    const unionDirName = `${sourceTypeDir}/${unionDirCandidate.name}`;
    const [imports, ...types] = fs
      .readFileSync(`${unionDirName}/_union.ts`, { encoding: 'utf-8' })
      .split('export type ');
    const lines = imports?.split(';');
    const news = lines
      ?.filter((s) => s.includes('_'))
      .flatMap(
        (s) =>
          s
            .replace('import ', '')
            .replace('* as ', '')
            .replace('{', '')
            .replace('}', '')
            .replace(/\n/g, '')
            .split('from')[0]
            ?.replace(/ /g, '')
            ?.split(',') ?? []
      );
    const newImports = `import {${news?.join(',')}} from '../mod.s';${lines
      ?.filter((s) => !s.includes('_'))
      .join('\n')}`;
    types.forEach((t) => {
      const [name, st] = t.split(' = ');
      if (name === undefined) {
        return;
      }
      const content = `${newImports}\nexport type Type = {${[
        '',
        `readonly _type: '${name}'`,
        st
          ?.replace(/{/g, '')
          .replace(/};/g, '')
          .replace(/\n/g, '')
          .split(';')
          .filter((x) => x !== '')
          .map((x) => {
            const [, name, t] = x
              .replace(':', '')
              .split(' ')
              .filter((x) => x !== '');
            return `${name}: ${
              news?.includes(t ?? '') || news?.includes(t?.split('.')[0] ?? '') ? `${t}.Type` : t
            }`;
          }),
      ].join('\n')}}`;

      fs.writeFileSync(`${unionDirName}/${lowerFirst(name)}.s.ts`, content);
    });
    const unionImport = types
      .map((t) => {
        const [name] = t.split(' = ');
        return `import * as ${name ?? ''} from './${lowerFirst(name ?? '')}.s';`;
      })
      .join('');
    const unionType = types
      .map((t) => {
        const [name] = t.split(' = ');
        return `${name}.Type`;
      })
      .join('|');

    fs.writeFileSync(
      `${unionDirName}/mod.s.ts`,
      `${unionImport}
    export type Type = ${unionType}
    `
    );
  }
});

exec('yarn lint --fix');
