function countCategories(categories) {
 
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts; 
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];


console.log(countCategories(input));
