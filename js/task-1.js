function makeTransaction (quantity, pricePerDroid) {
    const value = `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
    console.log(value);
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

