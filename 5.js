function revertString(string) {
    const charactersArray = string.split("");

    const reverseCharactersArray = new Array();
    charactersArray.forEach(char => reverseCharactersArray.unshift(char));
    return reverseCharactersArray.join("");
}

console.log(revertString("target"))