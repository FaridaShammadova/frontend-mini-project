import { base_url } from "./helper.js";

function getData() {
    fetch(base_url)
        .then(res => {
            if (!res.ok) throw new Error("Some error occurred.");
            return res.json();
        })
        .then(data => drawCards(data))
        .catch(err => console.log(err))
}

function drawCards(products) {
    const cards = document.querySelector(".cards");

    products.forEach(product => {
        const card_wrapper = document.createElement("div");
        card_wrapper.className = "card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center";

        card_wrapper.innerHTML = `
            <div class="card-wrapper">
                <div class="card" style="width: 18rem;">
                    <div class="card-img">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$ ${product.price}</p>
                        <p class="rating-star">&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                    </div>
                </div>
            </div>
        `;

        cards.appendChild(card_wrapper);
    });
}

function getNewData() {
    fetch(base_url)
        .then(res => {
            if (!res.ok) throw new Error("Some error occurred.");
            return res.json();
        })
        .then(data => drawNewCards(data))
        .catch(err => console.log(err))
}

function drawNewCards(products) {
    const new_cards = document.querySelector(".new-cards");

    products.forEach(product => {
        const card_wrapper = document.createElement("div");
        card_wrapper.className = "card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center";

        card_wrapper.innerHTML = `
            <div class="card-wrapper">
                <div class="card" style="width: 18rem;">
                    <div class="card-img">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$ ${product.price}</p>
                        <p class="rating-star">&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                    </div>
                </div>
            </div>
        `;

        new_cards.appendChild(card_wrapper);
    });
}


export {
    getData,
    getNewData
}