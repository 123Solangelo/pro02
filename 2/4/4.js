const foodNutrition = {
  "apple": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2
  },
  "milk": {
      "calories": 42.3,
      "protein": 3.4,
      "carbs": 1,
      "fat": 5
  },
  "fish": {
      "calories": 105,
      "protein": 18.9,
      "carbs": 2.73,
      "fat": 0
  },
  "bread": {
    "calories": 264.6,
    "protein": 9,
    "carbs": 3.2,
    "fat": 49
  },
  // add more food items and their nutritional values as needed
};

function calculateNutrition() {
  const foodInput = document.getElementById("foodInput").value.toLowerCase();
  const nutritionResult = document.getElementById("nutritionResult");

  if (foodNutrition.hasOwnProperty(foodInput)) {
      const food = foodNutrition[foodInput];

      document.getElementById("calories").innerHTML = `Calories: ${food.calories}`;
      document.getElementById("protein").innerHTML = `Protein: ${food.protein}g`;
      document.getElementById("carbs").innerHTML = `Carbs: ${food.carbs}g`;
      document.getElementById("fat").innerHTML = `Fat: ${food.fat}g`;

      nutritionResult.style.display = "block";
  } else {
      nutritionResult.style.display = "none";
      alert("Nutritional information not found for the entered food.");
  }
}
