function displayFibonacci() {
    var previous = 0;
    var current = 1;
    var next = previous + current;
    console.log(previous, current, next);
    for (var i = 0; i < 10; i++) {
        previous = current;
        current = next;
        next = previous + current;
        console.log(next);
    }
}
function sumOfFibonacci() {
}
displayFibonacci();
