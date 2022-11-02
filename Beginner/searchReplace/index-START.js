function searchReplace(sentence, toReplace, word){
    let replacement = (toReplace[0] === toReplace[0].toUpperCase() ? word[0].toUpperCase() : word[0].toLowerCase()) + word.slice(1);
    return sentence.replace(toReplace, replacement);
}
// /[A-Z]/.test(toReplace)
console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

/**Performance: using regex is actually slower */