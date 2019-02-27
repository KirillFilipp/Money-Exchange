// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coins = {};
    let h, q, d, n, p, h1, q1, d1, n1, p1;
    if (currency <= 0) {
        return {};
    } else if (currency >= 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        h = Math.floor(currency / 50);
        q = Math.floor((currency - h * 50) / 25);
        d = Math.floor((currency - h * 50 - q * 25) / 10);
        n = Math.floor((currency - h * 50 - q * 25 - d * 10) / 5);
        p = Math.floor((currency - h * 50 - q * 25 - d * 10 - n * 5) / 1);
        if (h) {
            coins['H'] = h;
        }
        if (q) {
            coins['Q'] = q;
        }
        if (d) {
            coins['D'] = d;
        }
        if (n) {
            coins['N'] = n;
        }
        if (p) {
            coins['P'] = p;
        }
        return coins;
    }
}

