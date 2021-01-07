// 1, 2, 5, 10, 25
const convertToCoins = (amount) => {
  let denominations = [25, 10, 5, 2, 1];
  let current_denomination_index = 0;

  while (amount > 0) {
    while (amount > 0) {
      while (amount < denominations[current_denomination_index]) {
        current_denomination_index++;
      }

      amount -= denominations[current_denomination_index];
      console.log(denominations[current_denomination_index]);
    }
  }
};
