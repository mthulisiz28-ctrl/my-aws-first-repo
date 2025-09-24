const { exec } = require('child_process');

// default bucket (you can pass a bucket name as the first arg: `node index.js my-bucket`)
const bucketName = process.argv[2] || 'buckettestingwe3';

exec(`aws s3 ls s3://${bucketName}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing aws: ${error.message}`);
    process.exit(1);
  }
  if (stderr && stderr.trim()) {
    console.error(`AWS stderr: ${stderr}`);
  }
  if (!stdout || !stdout.trim()) {
    console.log(`No objects found in ${bucketName}.`);
    return;
  }
  console.log(`Contents of ${bucketName}:\n${stdout}`);
});
