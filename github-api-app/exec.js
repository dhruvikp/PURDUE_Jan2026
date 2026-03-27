const {exec} = require('child_process');

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
  console.error(`Command errors: ${stderr}`);
});