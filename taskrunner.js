/**
 * Created by さかぷん on 2017/04/08.
 */
const exec = require("child_process").exec;
exec("npm run " + process.argv[2], (err, stdout, stderr) => {
    console.log(stdout);
});