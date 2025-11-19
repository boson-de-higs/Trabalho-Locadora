const img = document.querySelector(".carousel-img");

const images = [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720437009715-8a59b6b51146?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1605330757549-67b5021634ba?q=80&w=961&auto=format&fit=crop",
    "https://blogseminovos.localiza.com/wp-content/uploads/2025/08/Chevrolet-Tracker-RS-1-1024x683.jpg",
];


let index = 0;

function updateImage() {
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
        index = (index + 1) % images.length;
    }, 400);
}

updateImage();
setInterval(updateImage, 8000);
