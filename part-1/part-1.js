let finder = require('./projectModule');
console.log();
console.log("lookupByProjectId('p2'))");
console.log(finder.lookupByProjectId('p2'));

console.log();
console.log("lookupByEmployeeId('e1')");
console.log(finder.lookupByEmployeeId('e1')+'\n');

console.log();
console.log("lookupByEmployeeId('e3')");
console.log(finder.lookupByEmployeeId('e3'));