// Test flow parser

const Flow = require('flow-parser');
let ast = Flow.parse('1+"hello"');
console.log(JSON.stringify(ast, null, 2));
