const path = require("path");
const { symlinkSync } = require("fs");

const execa = require("execa");

const configFolder = path.resolve(__dirname, "../config");
const binPath = path.resolve(__dirname, "../node_modules/.bin/build-storybook");

(async () => {
  const params = ["--config-dir", configFolder, "--quiet", "-o", "public"];
  console.log("Call:",binPath)
  console.log("Storybook:", params);

  try {
    console.log("XXX1")
    const cmd = execa(binPath, params, {
      preferLocal: true,
    });
    console.log("XXX2")
    cmd.stdout.pipe(process.stdout);
    cmd.stderr.pipe(process.stdout);
    console.log("XXX3")
    await cmd
    console.log("XXX4")
  } catch (err) {
    console.log("ERROR:",err)
    process.exitCode = 1;
  }

  console.log("done");
})();
