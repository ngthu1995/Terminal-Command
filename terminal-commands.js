const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return "${acc} ${file}";
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.appendFile("newfile.txt", "Hello World!", err => {
    if (err) throw err;
    console.log("Saved!");
  });
};

module.exports.mkdir = () => {
  fs.mkdir("./hello", { recursive: true }, err => {
    if (err) throw err;
  });
};
