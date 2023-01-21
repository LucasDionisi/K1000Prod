var videos = [
    {
        url: 'https://www.youtube.com/embed/nof6OEDJxZU',
        titre: 'Les gens',
        description: "K1000 Live Looping Session @ Some Music (Brussels, Belgium).<br>Composé, écrit et produit par K1000prod (merci au FC Parolier.e). Clip produit et réalisé par Macca Production ; un grand merci à Jason. Minia réalisée par l'incroyable Margowinch. Cette Live Session a été réalisé avec du live looping, du scripted looping et des éléments déjà enregistrés."
    },
    {
        url: 'https://www.youtube.com/embed/XlPmf7O-nXI',
        titre: 'OSEF',
        description: "K1000 Live Looping Session @ Some Music (Brussels, Belgium).<br>Composé, écrit et produit par K1000prod (merci au FC Parolier.e). Clip produit et réalisé par Macca Production ; un grand merci à Jason. Minia réalisée par l'incroyable Margowinch. Cette Live Session a été réalisé avec du live looping, du scripted looping et des éléments déjà enregistrés."
    },
    {
        url: 'https://www.youtube.com/embed/-MhT8zfftMw',
        titre: 'Captain Mabb',
        description: "K1000 Live Looping Session @ Some Music (Brussels, Belgium).<br>Composé, écrit et produit par K1000prod (merci au FC Parolier.e). Clip produit et réalisé par Macca Production ; un grand merci à Jason. Minia réalisée par l'incroyable Margowinch. Cette Live Session a été réalisé avec du live looping, du scripted looping et des éléments déjà enregistrés."
    }
];

var videoSelect = 0;
var precVideoSelect = 0;

function actualiserVideo() {
    $('section.videos iframe')[0].src = videos[videoSelect].url;
    $('section.videos div.description h4')[0].innerHTML = videos[videoSelect].titre;
    $('section.videos div.description p')[0].innerHTML = videos[videoSelect].description;

    $('section.videos div.pagination div.bouton')[precVideoSelect].classList.remove('selected');
    $('section.videos div.pagination div.bouton')[videoSelect].classList.add('selected');
}

$(document).ready(function () {
    // Ajouter dinamiquement les boutons de pagination
    var boutonsPagination = [];
    for (var i = 0; i < videos.length; i++) {
        var boutonPagination = document.createElement('div');
        boutonPagination.classList.add('bouton');
        boutonsPagination.push(boutonPagination);
    }
    boutonsPagination.forEach((btn) => $('section.videos div.pagination')[0].appendChild(btn));

    actualiserVideo();

    if (window.screen.width < 768) {
        var zoneSwipe = document.getElementById("zone-swip");
        var hammer = new Hammer(zoneSwipe);
        
        hammer.on("swipeleft", function () {
            videoPrecedente();
        
            zoneSwipe.classList.add('swipe-left');
            setTimeout(() => zoneSwipe.classList.remove('swipe-left'), 500);
        });
        
        hammer.on("swiperight", function () {
            videoSuivante();
        
            zoneSwipe.classList.add('swipe-right');
            setTimeout(() => zoneSwipe.classList.remove('swipe-right'), 500);
        });
    }
});

function videoPrecedente() {
    precVideoSelect = videoSelect;
    if (videoSelect < 1) videoSelect = videos.length - 1;
    else videoSelect--;
    actualiserVideo();
}

function videoSuivante() {
    precVideoSelect = videoSelect;
    videoSelect = (videoSelect + 1) % videos.length;
    actualiserVideo();
}

$('#fleche-gauche').on('click', function () {
    videoPrecedente();
});

$('#fleche-droite').on('click', function () {
    videoSuivante();
});