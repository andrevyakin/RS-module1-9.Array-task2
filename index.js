//Способ 1 (Строго по условию задачи)
getSumOfSequence = number => {
    const arr = [];
    for (let i = 0; i < number; i++)
        arr.push(i + 1);
    return arr[0] + arr[arr.length - 1];
}

//Способ 2
getSumOfSequence2 = number => [...Array(number).keys()]
    .map(i => ++i)
    .filter((el, i) => (i === 0 || i === number - 1))
    .reduce((acc, el) => acc+el)

console.log(getSumOfSequence(5))
console.log(getSumOfSequence2(5))
