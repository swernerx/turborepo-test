const { fileURLToPath } = require("url");
const { resolve, dirname } = require("path");
const { symlinkSync } = require("fs");

const execa = require("execa");

const configFolder = resolve(__dirname, "../config");

async function start() {
  const params = ["--config-dir", configFolder, "--quiet"];
  console.log("Storybook:", params);

  try {
    const cmd = execa("build-storybook", params, {
      preferLocal: true,
    });
    cmd.stdout.pipe(process.stdout);
    cmd.stderr.pipe(process.stdout);
    await cmd;
  } catch (err) {
    console.log(err)
    process.exitCode = 1;
  }

  console.log("done");
}

start();
