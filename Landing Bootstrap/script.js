// Aggiunge un gestore di eventi che si attiva quando il documento HTML è completamente caricato
window.addEventListener("DOMContentLoaded", (event) => {
    //SLIDE IN TEXT 
    function textSlide(id, delay) {
        const subtitle = document.getElementById(id);
        setTimeout(function () {
            subtitle.style.opacity = "1";
            subtitle.style.transform = "translateY(0)";
        }, delay);
    }
    textSlide("subtitle", 200);
    textSlide("maintitle", 400);


    //HAMBURGER AUTOCLOSE
    function viewportWidthCustom(customWidth) {
        let viewport = window.innerWidth;
        if (viewport < customWidth) {
            const navbarToggler = document.getElementById("navbar-toggler");
            // Seleziona tutti i link del menu
            const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
            // Aggiungi un gestore di eventi clic a ciascun link del menu
            menuLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    // Chiudi il menu hamburger dopo il clic
                    if (navbarToggler.classList.contains("collapsed")) {
                        return; // Il menu è già chiuso, esci
                    }
                    navbarToggler.click(); // Simula il clic sul pulsante dell'hamburger menu
                    click.preventDefault(); // Impedisce il comportamento predefinito del link
                });
            });
        }
    }
    viewportWidthCustom(520);

    //NAVBAR Trasparent move
    function navBarTransition() {
        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", () => {
            let viewport = window.innerWidth;
            console.log(viewport);
                const scrollY = window.scrollY;
                const maxScroll = 150; // Puoi regolare questo valore per determinare quando raggiungere il colore bianco completamente
                // Calcola il colore di sfondo in base allo scroll
                const backgroundColor = `rgba(235, 235, 235, ${Math.min(scrollY / maxScroll, 1)})`;
                // Applica il colore di sfondo alla navbar
                navbar.style.backgroundColor = backgroundColor;
                // Cambia la classe della navbar in base al colore di sfondo
                if (scrollY >= maxScroll) {
                    navbar.classList.remove("transparent");
                    navbar.classList.add("white");
                } else {
                    navbar.classList.add("transparent");
                    navbar.classList.remove("white");
                }
        });
    }
    navBarTransition();

    window.addEventListener("resize", displayWindowSize);

    //PROGRESSBAR
    // Seleziona tutti gli elementi HTML con la classe CSS "progress"
    document.querySelectorAll(".progress").forEach((item) => {
        // Ottieni il valore dell'attributo "data-value" dell'elemento corrente
        let value = item.getAttribute("data-value");
        // Trova l'elemento figlio con classe "progress-bar" all'interno dello stesso elemento
        let bar = item.querySelector(".progress-bar");
        // Imposta la larghezza della barra di avanzamento con il valore ottenuto
        bar.style.width = value;
        // Aggiungi un ritardo di 500 millisecondi prima di reimpostare la larghezza
        setTimeout(function () {
            bar.style.width = value;
        }, 500);
    });

});

//SCROLL TO TOP
// Get the button
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

