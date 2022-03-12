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
            .then(data => displaySearchResult(data.data))     ///chges
            .catch(error => displayError(error));

    }
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}
const displaySearchResult = phones => {
    // console.log(phones);
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
        //onClick="loadPhoneDetail(${phone.slug})"
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>
            <button onclick="displayPhoneDetails()" class="btn btn-secondary" type="button"
            >Details</button> 
        </div>
    </div>`;
        searchResult.appendChild(div);
    });
}

//single phone ID
const loadPhoneDetail = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data[0]));
}
//single phone details
const displayPhoneDetails = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById("phone-details");
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                
            </div>
    `;
    phoneDetails.appendChild(div);
}


{/* <a href="${phone.Prototype[hasOwnProperty]}" class="btn btn-primary">Go somewhere</a> */ }