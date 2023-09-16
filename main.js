let cards = document.querySelector('.cards');

const response = fetch("https://fakestoreapi.com/products")
.then((anyNum) => {return anyNum.json()})
.then((data) => {
    data.map((item) => {
        return cards.innerHTML += `
        <div class="card1">
            <img src="${item.image}" alt="" class="cImg">
            <h2 class="cTitle">${item.title}</h2>

            <div class="prCat">
                <p class="cPrice">${item.price}</p>
                <p class="cCategory">${item.category}</p>
            </div>
        </div>

        
        `
    })
})