function mario(rows) {
  for (let row = 0; row < rows; row++) {
    let output = "";
    for (let blank = rows - row - 1; blank > 0; blank--) {
      output += " ";
    }
    for (let block = row + 1; block > 0; block--) {
      output += "#";
    }
    console.log(output + "#");
  }
}

mario(6);
