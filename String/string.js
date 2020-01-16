

// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 

function anagrams(str1, str2) {
    const letters = {};

    str1.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] += 1;
    })

    str2.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] -= 1;
    })

    return Object.values(letters).every(char => char === 0)
}


// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]


function titleize(str) {

    const not = ["a", "and", "of", "over", "the"];

    const word = str.split(" ");
    const capitalized = word.map((word, i) => {

        if (i !== 0 && not.indexOf(word) !== -1) {
            return word.toLowerCase();
        } else {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        }
    })

    return capitalized.join(" ");
}

// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]


String.prototype.symmetricSubstrings = function () {
    let final = [];

    for (let i = 0; i < this.length; i++) {
        let word = "";

        for (let j = i; j < this.length; j++) {
            word += this[j];
            let reversed = word.split("").reverse().join("");
            if (word.length > 1 && word === reversed) {
                final.push(word);
            }
        }
    }
    return final.sort();
}


// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.


function realWordsInString(dictionary, string) {
    const final = [];
    dictionary.forEach(el => {

        if (string.indexOf(el) !== -1) {
            final.push(el);
        }
    })
    return final.sort();
}

console.log(realWordsInString(["bears", "ear", "a", "army"], "erbearsweatmyajs"))



// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"


function caesarCipher(string, num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let final = ""

    for (let i = 0; i < string.length; i++) {

        if (string[i] === " ") continue;

        let first = alphabet.indexOf(string[i]);
        let newIdx = (first + num) % 26;
        final += alphabet[newIdx];
    }

    return final;
}

console.log(caesarCipher("xy z", 1))