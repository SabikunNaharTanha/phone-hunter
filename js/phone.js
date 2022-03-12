document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
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
            .then(data => displaySearchResult(data.status))     ///chges
            .catch(error => displayError(error));

    }
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}
const displaySearchResult = phones => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (phones.length == 0) {
        console.log('No results');

    }
    phones.forEach(phone => {              ///Changes from here
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadMealDetail(${phone.status.data})" class="card">
        <img src="${phone.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.strMeal}</h5>
            <p class="card-text">${phone.strInstructions.slice(0, 200)}</p>
            <button onclick="searchDetails()" class="btn btn-outline-secondary" type="button"
            id="button-details">Details</button> 
        </div>
    </div>`;
        searchResult.appendChild(div);
    });
}

//single phone ID
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));

}
//single phone details
const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById("meal-details");
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strMeal.slice(0, 200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div);
}