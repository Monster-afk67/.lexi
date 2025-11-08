/**
 * @fileOverview Utility functions for creating and validating .lexi files.
 */

import type { LexiFile } from './types';

/**
 * Creates a new LexiFile object.
 * This function handles the generation of a unique ID and the creation timestamp.
 *
 * @param name The name for the new vocabulary set.
 * @param vocab The 2D array of vocabulary.
 * @returns A complete LexiFile object.
 */
export function createLexiFile(name: string, vocab: string[][]): LexiFile {
  return {
    version: '1.0',
    id: crypto.randomUUID(), // Uses the standard Web Crypto API
    name,
    createdAt: new Date().toISOString(),
    vocab,
  };
}

/**
 * Validates if a given object conforms to the LexiFile structure.
 * This is a type guard that can be used to ensure a read file is valid.
 *
 * @param data The object to validate.
 * @returns True if the object is a valid LexiFile, false otherwise.
 */
export function validateLexiFile(data: any): data is LexiFile {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const hasVersion = data.version === '1.0';
  const hasId = typeof data.id === 'string' && data.id.length > 0;
  const hasName = typeof data.name === 'string' && data.name.length > 0;
  const hasCreatedAt = typeof data.createdAt === 'string' && !isNaN(Date.parse(data.createdAt));
  
  const hasValidVocab = Array.isArray(data.vocab) && data.vocab.every(
    (row: any) => Array.isArray(row) && row.every((cell: any) => typeof cell === 'string')
  );

  return hasVersion && hasId && hasName && hasCreatedAt && hasValidVocab;
}
