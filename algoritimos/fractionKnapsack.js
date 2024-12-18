const array = [
    { value: 120, weight: 30 },
    { value: 100, weight: 20 },
    { value: 60, weight: 10 },
  ];

  const maxWeight = 50;

  array.sort((a, b) => b.value/b.weight - a.value/a.weight)
  console.log(array)