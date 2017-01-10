function validateTcId(id) {
    if (!id || parseInt(id.charAt(0)) === 0 || id.length !== 11) {
        return false;
    }
    var numbers = id.split('');
    var i = 0;
    var sum = 0;
    var neg = 0;
    var firstTen = 0;
    while (i < 11) {
        numbers[i] = parseInt(numbers[i]);
        i++;
    }
    i = 0;
    while (i < 9) {
        (i % 2 === 0) ? (sum += numbers[i]) : (neg += numbers[i]);
        firstTen += numbers[i];
        i++;
    }
    firstTen += numbers[9];
    //console.log('Firstten: ' + firstTen);
    //console.log('(7 * sum - neg) % 10) and numbers[9]: ' + ( (7 * sum - neg) % 10) + ' ' + numbers[9]);
    if (((7 * sum - neg) % 10) != numbers[9]) {
        return false;
    }
    return (firstTen % 10) == numbers[10];
}
