function firstWord(s) {
  // your code here
	let spaceIndex = s.indexOf(" ");
	if (spaceIndex === -1) {
        return s;
    }

    // Otherwise, return the substring from index 0 to the first space
    return s.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
