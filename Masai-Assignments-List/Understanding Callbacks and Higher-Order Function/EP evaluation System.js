function evaluateEmployees(employees) {
  // Step 1: 
  const filtered = employees.filter(emp => emp.tasksCompleted > 5 && emp.rating >= 3);

  // Step 2: 
  const evaluated = filtered.map(emp => {
    let performance = "";
    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    }
    return { name: emp.name, performance };
  });

  // Step 3: 
  const priority = { "Excellent": 3, "Good": 2 };
  const sorted = evaluated.sort((a, b) => priority[b.performance] - priority[a.performance]);

  // Step 4: 
  return sorted;
}

// Example usage:
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
