document.addEventListener('DOMContentLoaded', function() {
    fetchProperties();
});

// Байрны мэдээлэл авах
function fetchProperties() {
    fetch('get_properties.php')
        .then(response => response.json())
        .then(data => {
            const propertiesContainer = document.querySelector('.property-list');
            propertiesContainer.innerHTML = ''; // Анхны агуулгаас цэвэрлэх

            data.forEach(property => {
                let propertyCard = document.createElement('div');
                propertyCard.classList.add('property-card');
                
                propertyCard.innerHTML = `
                    <img src="${property.image}" alt="${property.name}">
                    <h3>${property.name}</h3>
                    <p>${property.location}</p>
                    <p class="price">$${property.price}</p>
                `;
                
                propertiesContainer.appendChild(propertyCard);
            });
        })
        .catch(error => console.error('Байр авахад алдаа гарлаа:', error));
}
