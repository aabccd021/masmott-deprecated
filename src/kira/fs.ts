import * as fs from 'fs';
import { IO } from 'kira-pure';

export type DirEntKind = 'file' | 'directory' | 'etc';

export type DirEnt = {
  readonly kind: DirEntKind;
  readonly name: string;
};

export type ExistsReadDirRes = {
  readonly _state: 'Exists';
  readonly entities: readonly DirEnt[];
};

export type AbsentReadDirRes = {
  readonly _state: 'Absent';
};

export type ReadDirRes = ExistsReadDirRes | AbsentReadDirRes;

export type ReadDirErr = {
  readonly code: string;
};

export function readDirSync(dir: string): IO<ReadDirRes> {
  return () => {
    // eslint-disable-next-line functional/no-try-statement
    try {
      return {
        _state: 'Exists',
        entities: fs.readdirSync(dir, { withFileTypes: true }).map((d) => ({
          kind: d.isDirectory() ? 'directory' : d.isFile() ? 'file' : 'etc',
          name: d.name,
        })),
      };
    } catch (e) {
      if ((e as ReadDirErr).code === 'ENOENT') {
        return {
          _state: 'Absent',
        };
      }
      // eslint-disable-next-line functional/no-throw-statement
      throw e;
    }
  };
}

// function lowerFirst(string: string): string {
//   const [f, ...rest] = string;
//   return [f?.toLowerCase(), ...rest].join('');
// }

// function readFile(path: string): IO<string> {
//   return () => fs.readFileSync(path, { encoding: 'utf-8' });
// }

// function writeFile(path: string): (content: string) => IO<void> {
//   return (content) => () => fs.writeFileSync(path, content);
// }
