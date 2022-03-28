const path = require("path");
const { symlinkSync } = require("fs");
const execa = require("execa");

const configFolder = path.resolve(__dirname, "../config");
const binPath = path.resolve(__dirname, "../node_modules/.bin/start-storybook");

(async () => {
  const params = ["--config-dir", configFolder, "--quiet"];

  try {
    const cmd = execa(binPath, params);
    cmd.stdout.pipe(process.stdout);
    cmd.stderr.pipe(process.stdout);
    await cmd
  } catch (err) {
    console.log("Storybook Error:",err)
    process.exitCode = 1;
  }
})();
