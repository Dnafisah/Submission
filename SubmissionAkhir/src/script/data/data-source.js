import meals from './meals.js';

class DataSource {
  static searchMeal(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMeals = meals.filter(meal => meal.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredClubs.length) {
        resolve(filteredMeals);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;