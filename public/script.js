const arrows = document.querySelectorAll('.button');

const carouselData = {
    "1": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040790/IMG_20251229_153856_grksmk.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040790/IMG_20251229_153859_jtw4dx.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040791/IMG_20251229_153848_rv1rdx.jpg'
    ],
    "2": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040790/IMG_20251229_153903_fywg1h.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040789/IMG_20251229_153901_yejyhb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615850/Messenger_creation_DC3B4772-065E-44AE-BB4B-91999164E689_pmuvc9.jpg'
    ],
    "3": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615849/Messenger_creation_46524785-BEE0-4B36-B512-0D9FFCC80AFC_igajaw.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040791/IMG_20251229_153829_cp0rgb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040790/IMG_20251229_153851_bnjlrt.jpg'
    ],
    "4": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1766975331/IMG_1691_gwgzhe.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1766786255/IMG_20251226_165722_kasynt.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615849/Messenger_creation_78D07FA9-B616-4446-9102-D428D36BEA7D_soouzp.jpg'
    ]
};

const currentIndexes = {};

const buttonClick = (e) => {
    const btn = e.target.closest('.button');
    if (!btn) return;

    const id = [...btn.classList].find(cls => !isNaN(cls));
    
    if (currentIndexes[id] === undefined) {
        currentIndexes[id] = 0;
    }

    const photos = carouselData[id];
    const container = btn.closest('.image-carousel');
    const imgElement = container.querySelector('.carousel-image');

    if (btn.classList.contains('right-click')) {
        currentIndexes[id] = (currentIndexes[id] + 1) % photos.length;
    } else {
        currentIndexes[id] = (currentIndexes[id] - 1 + photos.length) % photos.length;
    }

    imgElement.src = photos[currentIndexes[id]];
};

arrows.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
        buttonClick(e);
    });
});