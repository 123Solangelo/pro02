let selectedFoods = [];

function addFood() {
    const foodInput = document.getElementById('foodInput');
    const selectedFoodsList = document.getElementById('selectedFoods');
    
    if (foodInput.value.trim() !== '') {
        const food = foodInput.value.trim();
        selectedFoods.push(food);

        const option = document.createElement('option');
        option.value = food;
        option.text = food;
        selectedFoodsList.add(option);

        foodInput.value = ''; // Clear the input field after adding
    }
}

function analyzeMeal() {
    const nutrientsDatabase = {
        // Nutrient information for various foods
    };

    const totalNutrients = { carbohydrates: 0, fats: 0, proteins: 0 };

    selectedFoods.forEach(food => {
        totalNutrients.carbohydrates += nutrientsDatabase[food]?.carbohydrates || 0;
        totalNutrients.fats += nutrientsDatabase[food]?.fats || 0;
        totalNutrients.proteins += nutrientsDatabase[food]?.proteins || 0;
    });

    const missingNutrients = {
        carbohydrates: totalNutrients.carbohydrates < 20,
        fats: totalNutrients.fats < 30,
        proteins: totalNutrients.proteins < 10,
    };

    displayResult(missingNutrients);
}

function displayResult(missingNutrients) {
    const resultContainer = document.getElementById('result');
    const missingNutrientsList = document.getElementById('missingNutrients');
    missingNutrientsList.innerHTML = '';

    for (const nutrient in missingNutrients) {
        if (missingNutrients[nutrient]) {
            const listItem = document.createElement('li');
            listItem.textContent = nutrient.charAt(0).toUpperCase() + nutrient.slice(1);
            missingNutrientsList.appendChild(listItem);
        }
    }

    resultContainer.style.display = 'block';
}