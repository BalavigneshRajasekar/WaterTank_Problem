const property = ["Theatre", "Pub", "commercialPark"];
const units = [5, 4, 10];
const earnings = [1500, 1000, 3000];

const findMaxProfit = (time) => {
  let small = Math.min(...units);
  let maxProfit = 0;
  let givenTime = time;

  let n = 0;
  let profit = 0;
  let profitTime = 0;
  let propertyBuilt;
  // Hold total property created
  let totalProperty = new Map();

  while (givenTime > small) {
    if (givenTime > units[n]) {
      let balanceTime = givenTime - units[n];
      let value = balanceTime * earnings[n];

      if (profit < value) {
        profit = value;
        profitTime = balanceTime;
        propertyBuilt = property[n];
      }
    }
    n++;
    // After 1st iteration of each property we calculate max profit of first timeline
    //set the balance timeline to givenTime
    //set 0 for profit,profitTime and n for next Iteration of property
    if (n == units.length) {
      maxProfit += profit;
      givenTime = profitTime;
      if (totalProperty.has(propertyBuilt)) {
        totalProperty.set(propertyBuilt, totalProperty.get(propertyBuilt) + 1);
      } else {
        totalProperty.set(propertyBuilt, 1);
      }
      n = 0;
      profit = 0;
      profitTime = 0;
    }
  }
  console.log(maxProfit);
  console.log(
    `T: ${totalProperty.get("Theatre") || 0} P: ${
      totalProperty.get("Pub") || 0
    } C: ${totalProperty.get("commercialPark") || 0}`
  );
};

findMaxProfit(13);
