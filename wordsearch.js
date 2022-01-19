const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    let newArray = [];

    for (let i = 0; i < letters[0].length; i++) {
        newArray.push([]);
    }
    for (let row = 0; row < letters.length; row++) {
        // console.log(letters[k]);
        for (let col = 0; col < letters[row].length; col++) {
            let newEl = letters[row][col];
            newArray[col].push(newEl);
        }
    }

    // console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        // console.log(newArray[i]);
        const newArr = newArray[i].join('');
        console.log(`vertical: ${newArr}`);
        if (newArr === word) {
            return true;
        }

        // npm install
        // npm test

        const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) return true
        }
    }

    const horizontalJoin = letters.map((ls) => ls.join(''));
    for (const l of horizontalJoin) {
        console.log(`horizontal: ${l}`);
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};
module.exports = wordSearch;