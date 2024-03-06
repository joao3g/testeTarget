function isFibonacci(number) {
    const start = [0, 1];
    let n = 1;
    while (n < number) {
        n = start[start.length - 1] + start[start.length - 2];
        start.push(n);
    }

    return n === number;
}

console.log(isFibonacci(35))