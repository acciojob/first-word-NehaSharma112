function firstWord(s) {
  // your code here
	let sp = s.indexOf(" ");
	if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return the substring from index 0 to the first space
    return str.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
