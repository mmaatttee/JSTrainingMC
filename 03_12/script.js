/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Book from "./Bookmc.js";

const encyclopedia = new Book(
  "Encyclopedia",
  500,
  "Hardcover",
  15,
  26,
  26,
  false,
  "February 23, 1922 15:00:00 PST"
);

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The Encyclopedia object:", encyclopedia);
console.log("Date Published:", encyclopedia.datePublished);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);