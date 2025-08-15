const messages = [
    "Chúc em iu luôn vui vẻ 🌸",
    "Mạnh mẽ và hạnh phúc 🍀",
    "Những điều tốt đẹp sẽ đến 🌿",
    "Anh luôn bên em 💚",
    "Mãi được yêu thương 🤍",
    "Mỗi ngày là một niềm vui mới 🌼",
    "Ước mơ sớm thành hiện thực 🌟",
    "Bình an và may mắn 🌙",
    "Niềm tin luôn vững vàng 🕊️",
    "Chồng con tin em (voice chị Thủy) 🌸"
];

const images = [
    "IMG_8697.PNG",
    "IMG_5432.JPG",
    "IMG_7124.JPG",
    "IMG_5303.JPG",
    "IMG_7306.JPG",
    "IMG_3799.JPG"

];

function createFloatingMessage() {
    const el = document.createElement("div");
    el.className = "floating-message";
    el.textContent = messages[Math.floor(Math.random() * messages.length)];

    const startSide = Math.floor(Math.random() * 4);
    let startX, startY, moveX, moveY;

    switch (startSide) {
        case 0:
            startX = Math.random() * window.innerWidth;
            startY = window.innerHeight + 50;
            moveX = startX + (Math.random() * 200 - 100);
            moveY = -100;
            break;
        case 1:
            startX = Math.random() * window.innerWidth;
            startY = -50;
            moveX = startX + (Math.random() * 200 - 100);
            moveY = window.innerHeight + 100;
            break;
        case 2:
            startX = -200;
            startY = Math.random() * window.innerHeight;
            moveX = window.innerWidth + 200;
            moveY = startY + (Math.random() * 200 - 100);
            break;
        case 3:
            startX = window.innerWidth + 200;
            startY = Math.random() * window.innerHeight;
            moveX = -200;
            moveY = startY + (Math.random() * 200 - 100);
            break;
    }

    el.style.left = startX + "px";
    el.style.top = startY + "px";
    el.style.color = ["#2e4d3a", "#3a6b4f", "#8abf69", "#f6c453", "#ffd97d"][Math.floor(Math.random() * 5)];

    document.body.appendChild(el);

    const duration = 6000 + Math.random() * 3000;
    el.animate([
        { transform: `translate(0, 0)`, opacity: 0 },
        { opacity: 1, offset: 0.1 },
        { transform: `translate(${moveX - startX}px, ${moveY - startY}px)`, opacity: 0 }
    ], { duration: duration, easing: "linear" });

    setTimeout(() => el.remove(), duration);
}

function createFloatingImage() {
    const img = document.createElement("img");
    img.className = "floating-image";
    img.src = images[Math.floor(Math.random() * images.length)];

    const startSide = Math.floor(Math.random() * 4);
    let startX, startY, moveX, moveY;

    switch (startSide) {
        case 0:
            startX = Math.random() * window.innerWidth;
            startY = window.innerHeight + 100;
            moveX = startX + (Math.random() * 200 - 100);
            moveY = -200;
            break;
        case 1:
            startX = Math.random() * window.innerWidth;
            startY = -150;
            moveX = startX + (Math.random() * 200 - 100);
            moveY = window.innerHeight + 200;
            break;
        case 2:
            startX = -200;
            startY = Math.random() * window.innerHeight;
            moveX = window.innerWidth + 200;
            moveY = startY + (Math.random() * 200 - 100);
            break;
        case 3:
            startX = window.innerWidth + 200;
            startY = Math.random() * window.innerHeight;
            moveX = -200;
            moveY = startY + (Math.random() * 200 - 100);
            break;
    }

    img.style.left = startX + "px";
    img.style.top = startY + "px";

    document.body.appendChild(img);

    const duration = 7000 + Math.random() * 4000;
    img.animate([
        { transform: `translate(0, 0)`, opacity: 0 },
        { opacity: 1, offset: 0.1 },
        { transform: `translate(${moveX - startX}px, ${moveY - startY}px)`, opacity: 0 }
    ], { duration: duration, easing: "linear" });

    setTimeout(() => img.remove(), duration);
}

setInterval(createFloatingMessage, 1000);
setInterval(createFloatingImage, 2500);

window.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = false;
    music.play();
}, { once: true });
