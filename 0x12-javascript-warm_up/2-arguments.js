#!/usr/bin/node
/* print message based on
of the number of arguments passed */
const numArgv = process.argv.length;
if (numArgv < 3) {
  console.log('No argument');
} else if (numArgv === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
