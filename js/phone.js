document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    // console.log('clicked')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        displayError();
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))   //scfsg
            .catch(error => displayError(error));

    }
}
// const displayError = error => {
//     document.getElementById('error-message').style.display = 'block';
// }
// const displaySearchResult = meals => {
//     // console.log(meals);
//     const searchResult = document.getElementById('search-result');
//     // searchResult.innerHTML = '';
//     searchResult.textContent = '';
//     if (meals.length == 0) {
//         console.log('No results');
        
//     }
//     meals.forEach(meal => {
//         // console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div onClick="loadMealDetail(${meal.idMeal})" class="card">
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${meal.strMeal}</h5>
//             <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//             <button onclick="searchDetails()" class="btn btn-outline-secondary" type="button"
//             id="button-details">Details</button>            //newly added
//         </div>
//     </div>`;
//         searchResult.appendChild(div);
//     });
// }

// //single phone ID
// const loadMealDetail = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMealDetails(data.meals[0]));

// }
// //single phone details
// const displayMealDetails = meal => {
//     console.log(meal);
//     const mealDetails = document.getElementById("meal-details");
//     mealDetails.textContent = '';
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${meal.strMeal}</h5>
//                 <p class="card-text">${meal.strMeal.slice(0, 200)}</p>
//                 <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//             </div>
//     `;
//     mealDetails.appendChild(div);
// }