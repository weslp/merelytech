document.querySelector('h6').addEventListener('click', () => {
    if(Math.round(Math.random()) == 0) {
        window.open("https://t.me/ivan_dsgner", "_blank")
    } else {
        window.open("https://vk.com/merelytech", "_blank")
    }
})

let nav = document.querySelectorAll('.nav-item');

for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', () => {
        if (i == 0) {
            window.open("https://vk.com/merelytech", "_blank");
        } else if (i == 1) {
            window.open("https://t.me/ivan_dsgner", "_blank");
        } else if (i == 2) {
            window.open("https://www.behance.net/ivan_dsgner", "_blank");
        }
    })
}