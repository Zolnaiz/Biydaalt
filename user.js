// Зар нэмэх, харуулах
let products = JSON.parse(localStorage.getItem('products')) || [];

const displayProducts = () => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Үнэн хэрэгтээ бүх жагсаалтыг ариутгана

    if (products.length === 0) {
        productList.innerHTML = '<p class="text-center">Өмнө нь зарлагдаагүй ямар ч бүтээгдэхүүн байхгүй байна.</p>';
    } else {
        products.forEach(product => {
            let productItem = document.createElement('div');
            productItem.classList.add('col-md-4');
            productItem.classList.add('mb-4');
            productItem.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Үнэ:</strong> ${product.price}₮</p>
                        <button class="btn btn-primary">Сагсанд нэмэх</button>
                    </div>
                </div>
            `;
            productList.appendChild(productItem);
        });
    }
};

displayProducts();
