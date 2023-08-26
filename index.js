// let shoppingList = document.getElementById("shopping-list");

// async function fetchLists() {
//     let response = await fetch("https://b6b335-3.myshopify.com");
//     let parsedResponse = await response .json();

//     let shoppingComponent = parsedResponse.map ((shopping) => {
//         return `<div class="shopping-item">
//         <img class="image" src="${shopping-Image}"/>
//         <div class="shopping-title">${shopping-title}</div>
//         <div>Price: ${product.price}</div>
//         </div>`
//     })
//     shoppingList.innerHTMl = shoppingComponent.join("");

// }

// fetchLists();


let productContainer = document.getElementById("product-container");

async function fetchProducts() {
    // call the remote server/url
    let response = await fetch("https://kshopey.com/");
    // parse the response to relevant format .json() for object and .blob() for files
    let parsedResponse = await response.json();

    // compose html component dynamically by mapping/looping through the parsed respons
    let productComponent = parsedResponse.map ((product) => {
        return `<div class="product-item">
        <img class="image" src="${product.image}"/>
        <div class="product-title">${product.title}</div>
        <div>Price: ${product.price}</div>
        <div class="button"><button>Add to cart</button></div>
        </div>`;
    });

    // join the mapped products together to eliminate comma
    productContainer.innerHTML = productComponent.join("");
}

fetchProducts();