let totalImages = 0;
let totalImagesLoaded = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {

    const container = entry.target;
    const image = container.querySelector('img');

    image.src = image.dataset.src;

    totalImagesLoaded += 1;
    showLog();

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (image) => {
    observer.observe(image);

    totalImages += 1;
    showLog();
};

export const deleteAll = () => {
    totalImages = 0;
    totalImagesLoaded = 0;

    showLog();
};

const showLog = () => {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${totalImagesLoaded}`);
    console.log("--------------------------------------");
}
