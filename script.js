const bgCarousel = document.querySelector(".bg-carousel");

const images = [
    "https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1720437009715-8a59b6b51146?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634737581963-5a22ba471961?q=80&w=943&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605330757549-67b5021634ba?q=80&w=961&auto=format&fit=crop",
    "https://cdn.motor1.com/images/mgl/xqowy2/s1/chevrolet-onix-plus-premier-2023-vs.-hyundai-hb20s-platinum-plus-2023.webp"
];

let index = 0;

function updateBackground() {
    bgCarousel.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

updateBackground();             
setInterval(updateBackground, 8000); 
