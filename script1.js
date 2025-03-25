document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=2",
        "https://picsum.photos/600/400?random=3",
        "https://picsum.photos/600/400?random=4"
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById("mainImage");

    function changeImage(index) {
        currentIndex = index;
        mainImage.src = images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        mainImage.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        mainImage.src = images[currentIndex];
    }

    // Make functions globally accessible for HTML onclick events
    window.changeImage = changeImage;
    window.prevImage = prevImage;
    window.nextImage = nextImage;
});
