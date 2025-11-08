# LexiFile (.lexi) Utilities

This directory contains utilities and type definitions to help developers read and create `.lexi` files for interoperability with the LexiFlow application.

## The .lexi Format

A `.lexi` file is a JSON file (`.json`) with a `.lexi` extension. It contains a single vocabulary set. The structure of the JSON object is defined by the `LexiFile` type.

### Structure

- `version` (string): The version of the LexiFile format. Currently "1.0".
- `id` (string): A unique identifier for the vocabulary set (e.g., a UUID).
- `name` (string): The name of the vocabulary set.
- `createdAt` (string): The creation date of the set in ISO 8601 format.
- `vocab` (string[][]): A 2D-array representing the vocabulary. Each inner array is a "row" of terms, which can represent a word, its translation, an example sentence, etc.

### Example `example.lexi`

```json
{
  "version": "1.0",
  "id": "b7e7b5f0-6a7c-4a3e-8b1e-3f3e3e3e3e3e",
  "name": "English Lesson 5",
  "createdAt": "2023-10-27T10:00:00.000Z",
  "vocab": [
    ["house", "Haus"],
    ["mouse", "Maus", "The mouse is in the house."],
    ["tree", "Baum"]
  ]
}
```

## Usage (TypeScript/JavaScript)

You can use the provided utility functions to easily create and validate LexiFile objects.

### `types.ts`

This file contains the TypeScript interface `LexiFile` which defines the data structure.

### `utils.ts`

This file contains helper functions:

- `createLexiFile(name: string, vocab: string[][]): LexiFile`: Creates a new, valid `LexiFile` object. It automatically generates a UUID and the current timestamp.
- `validateLexiFile(data: any): boolean`: Checks if a given JavaScript object conforms to the `LexiFile` structure. This is useful for validating a file that has been read.

### Example: Creating a `.lexi` file with Node.js

```javascript
import { createLexiFile } from './utils';
import * as fs from 'fs';

const myVocab = [
  ['hello', 'hallo'],
  ['world', 'Welt']
];

const lexiFileObject = createLexiFile("My First Set", myVocab);

const jsonString = JSON.stringify(lexiFileObject, null, 2);

fs.writeFileSync('my-first-set.lexi', jsonString, 'utf-8');

console.log('Successfully created my-first-set.lexi');
```

### Example: Reading a `.lexi` file with Node.js

```javascript
import { validateLexiFile } from './utils';
import * as fs from 'fs';

const fileContent = fs.readFileSync('my-first-set.lexi', 'utf-8');
const data = JSON.parse(fileContent);

if (validateLexiFile(data)) {
  console.log('The file is a valid .lexi file.');
  console.log('Set Name:', data.name);
} else {
  console.error('This is not a valid .lexi file.');
}
```
