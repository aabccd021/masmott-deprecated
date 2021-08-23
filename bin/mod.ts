import * as ts from 'typescript';
import * as fs from 'fs';

// const source = fs.readFileSync('./src/type/field/_union.ts', {encoding: 'utf-8'});

// const result = ts.transpileModule(source, {});

// console.log(JSON.stringify(result));

// console.log(source);

/**
 * Prints out particular nodes from a source file
 *
 * @param file a path to a file
 * @param identifiers top level identifiers available
 */
function extract(file: string): void {
  // Create a Program to represent the project, then pull out the
  // source file to parse its AST.
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  if (!sourceFile) {
    throw Error();
  }

  fs.writeFileSync(file + '.txt',JSON.stringify(sourceFile, undefined, 2));

  // To print the AST, we'll use TypeScript's printer
}

extract('./src/type/field/_union.ts');
