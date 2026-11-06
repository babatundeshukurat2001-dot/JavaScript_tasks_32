function Permutation(alphabet) {
    let result = [""];

    for (let count = 0; count < alphabet.length; count++) {

        let letter = alphabet[count];

        if (/[a-zA-Z]/.test(letter)) {

            let newResult = [];

            for (let word of result) {

                newResult.push(word + letter.toLowerCase());

                newResult.push(word + letter.toUpperCase());
            }

            result = newResult;

        } else {

            for (let count = 0; count < result.length; count++) {

                result[count] = result[count] + letter;
            }
        }
    }

    return result;
}

console.log(Permutation('abc'));
