function firstWord(str) {
  // Trim leading and trailing spaces
  str = str.trim();

  // If empty after trim, return empty string
  if (str.length === 0) {
    return "";
  }

  // Find first space index
  let spaceIndex = str.indexOf(" ");

  // If no space, return entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise return substring till first space
  return str.substring(0, spaceIndex);
}

// 📌 Input handling (for platform)
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputData = "";
process.stdin.on("data", function (input) {
  inputData += input;
});

process.stdin.on("end", function () {
  inputData = inputData.trim();
  console.log(firstWord(inputData));
});
