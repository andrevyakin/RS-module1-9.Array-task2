getSumOfSequence = number => {
    const arr = [];
    for (let i = 0; i < number; i++)
        arr.push(i + 1);
    return arr[0] + arr[arr.length - 1];
}

console.log(getSumOfSequence(5))
