// // PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var availableCoins = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    },
        necessaryCoins = {};

    if (currency <= 0) {
        necessaryCoins = {};
    } else if (currency > 10000) {
        necessaryCoins = {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    } else {
        for (key in availableCoins) {
            var qntCoins = Math.floor(currency / availableCoins[key]);
            if (qntCoins) {
                necessaryCoins[key] = qntCoins;
                currency = currency % availableCoins[key];
            }
        }
    }
    return necessaryCoins;
};
