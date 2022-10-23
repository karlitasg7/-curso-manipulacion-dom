const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('div#app');

appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === 'H2') {
        window.alert('Hola')
    }
});

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price);

    return newPrice;
}

window.fetch(`${baseUrl}/api/avo`)
    .then((response) => response.json())
    .then((data) => {
        const allItems = [];
        data.data.forEach((item) => {

            const image = document.createElement('img');
            image.src = `${baseUrl}${item.image}`;

            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'text-lg';

            const price = document.createElement('div');
            price.className = 'text-gray-600';
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(image, title, price);

            allItems.push(container);
        })

        appNode.append(...allItems);

    });
