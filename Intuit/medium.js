

// Group Anagrams


var groupAnagrams = function (strs) {

    let final = {};

    for (let word of strs) {

        let sorted = [...word].sort().join("");
        if (!final[sorted]) final[sorted] = [];
        final[sorted].push(word);
    }

    return Object.values(final);

};