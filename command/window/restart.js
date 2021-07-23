#!/usr/bin/env node
const { spawn } = require('child_process');
const childShell = spawn("shutdown -r");
childShell.stdout.on('data', (data) => {
    console.log(data.toString());
});

childShell.stderr.on('data', (data) => {
    console.error(data.toString());
});

childShell.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});