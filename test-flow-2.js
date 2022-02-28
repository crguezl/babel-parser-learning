// Test flow parser

const Flow = require('flow-parser');
let ast = Flow.parse(`
// @flow
function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2);
`);
console.log(JSON.stringify(ast, null, 2));

