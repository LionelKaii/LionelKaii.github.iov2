function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="" target="_blank"></a>`;
    const takapediaIG = `<a href="" target="_blank">t</a>`;
    const takapediaWA = `<a href="" target="_blank"></a>`;

    const msg1 = `<p class="animation mb-0 text-truncate">!!!</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Website Penghitung Winrate Mobile Legend</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Share Website Ini ke Temen Temen Kalian Ya.</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Tetap jaga kesehatan..`;
    const msg5 = `<p class="animation mb-0 text-truncate">Hehey not bad...</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
