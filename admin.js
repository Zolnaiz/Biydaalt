// Бүтээгдэхүүн нэмэх
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;
    const image = document.getElementById('productImage').value;

    const newProduct = {
        name,
        price,
        description,
        image
    };

    // Зарын мэдээллийг localStorage руу хадгалах
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    // Зар нэмсэний дараа нүүр хуудсанд чиглүүлэх
    alert('Зар амжилттай нэмэгдлээ!');
    window.location.href = 'index.html'; // Хэрэглэгчийн нүүр хуудас
});
