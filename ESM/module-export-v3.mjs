// Named exports
export function f() { }
export const one = 1;
export { foo, b as bar };

// Default exports
export default function f() { } // declaration with optional name
// Replacement for `const` (there must be exactly one value)
export default 123;

// Re-exporting from another module
export * from './greeting.mjs';;
export { foo, b as bar } from './greeting.mjs';;



// Named imports
import { foo, bar as b } from './greeting.mjs';
// Namespace import
import * as someModule from './greeting.mjs';
// Default import
import someModule from './greeting.mjs';

// Combinations:
import someModule, * as someModule from './greeting.mjs';
import someModule, { foo, bar as b } from './greeting.mjs';

// Empty import (for modules with side effects)
import './greeting.mjs';

//Syntactic pitfall: named importing is not destructuring
// import { foo } from './bar.mjs'; // import
// const { foo } = require('./bar.mjs'); // destructuring

// import { foo as f } from './bar.mjs'; // importing
// const { foo: f } = require('./bar.mjs'); // destructuring

