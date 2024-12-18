const array = [
    { value: 120, weight: 30 },
    { value: 100, weight: 20 },
    { value: 60, weight: 10 },
  ];

  const maxWeight = 50;

  function fractionKnapsack(array, maxWeight) {
      array.sort((a, b) => b.value/b.weight - a.value/a.weight)
    
      let currentWeight = 0
      let currentValue = 0
    
      for (let i = 0; i < array.length; i++) {
        if (currentWeight + array[i].weight <= maxWeight) {
          currentWeight += array[i].weight
          currentValue += array[i].value
        } else {
          const fraction = (maxWeight - currentWeight) / array[i].weight
          currentWeight += array[i].weight * fraction
          currentValue += array[i].value * fraction
          break
        }
      }
      return [currentValue, currentWeight]
  }

  console.log(fractionKnapsack(array, maxWeight))

  module.exports = fractionKnapsack