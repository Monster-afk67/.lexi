/**
 * @fileOverview Type definitions for the .lexi file format.
 */

/**
 * Defines the structure of a .lexi file.
 * This is the object that will be serialized into a JSON file.
 */
export interface LexiFile {
  /**
   * The version of the .lexi file format.
   * @example "1.0"
   */
  version: "1.0";

  /**
   * A unique identifier for the vocabulary set.
   * We recommend using a UUID.
   */
  id: string;

  /**
   * The name of the vocabulary set.
   * @example "English Lesson 5"
   */
  name: string;

  /**
   * The creation date of the set in ISO 8601 format.
   */
  createdAt: string;

  /**
   * A 2D array representing the vocabulary.
   * Each inner array represents a row of associated terms.
   * For example, a row could contain a word and its translation,
   * or a word, its translation, and an example sentence.
   *
   * @example
   * [
   *   ["house", "Haus"],
   *   ["mouse", "Maus", "The mouse is in the house."],
   *   ["tree", "Baum"]
   * ]
   */
  vocab: string[][];
}
