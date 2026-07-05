const container = document.getElementById('gallery-section');

const images = [
    {
        alt: "red collar puppy",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1776180542/20220522180857_IMG_0250_epk9xb.jpg"
    },
    {
        alt: "puppy with tongue out",
        src: "https://res.cloudinary.com/dbuwekmex/image/upload/v1776180548/20220522173524_IMG_0209_utlvtp.jpg"
    },
    {
        alt: "yellow collar walking",
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1776180529/20220522173342_IMG_0204_schbob.jpg'
    },
    {
        alt: 'brown collar',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1776180479/20220522172522_IMG_0194_zyfxzc.jpg'
    },
    {
        alt: 'viola sitting in front of brick',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1776180046/20220623103647_IMG_0493_xnqovv.jpg'
    },
    {
        alt: 'viola standing on chair',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1776180046/20220623104020_IMG_0524_xmzm70.jpg'
    },
    {
        alt: 'eleanor on cliff',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1776179018/20220706_183748_xbkiq6.jpg'
    },
    {
        alt: 'sleeping puppy',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615849/Messenger_creation_46524785-BEE0-4B36-B512-0D9FFCC80AFC_igajaw.jpg'
    },
    {
        alt: 'puppy sitting with toy',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615849/Messenger_creation_BCCD979E-5564-4333-8287-22BFCAD10A57_jbijp7.jpg'
    },
    {
        alt: 'kissing puppies',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615848/Messenger_creation_814859E2-6655-402A-88C2-8EDAC6012175_bzklri.jpg'
    },
    {
        alt: 'orange collar sleeping',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615848/Messenger_creation_3352BC7E-32E2-4833-A5AC-B1D3ABEA3ADE_j75ok3.jpg'
    },
    {
        alt: 'puppy sleeping with octopus toy',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615848/Messenger_creation_E798DD46-ACF2-499C-B6DA-9F3330F05AEB_qsns1n.jpg'
    },
    {
        alt: 'puppy laying head on another puppies back',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615847/Messenger_creation_F4F1F75C-F32B-44A2-9951-80CFAE12C25F_mwrut0.jpg'
    },
    {
        alt: 'puppies playing in grass',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1746662138/20220605083230_IMG_0325_tn4zxc.jpg'
    },
    {
        alt: 'puppies sitting in grass',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1746662135/20220605082340_IMG_0317_b3srqz.jpg'
    },
    {
        alt: 'puppies under heat lamp',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1746662062/20211225_183059_nwckhd.jpg'
    },
    {
        alt: 'very fluffy puppy',
        src: 'https://res.cloudinary.com/dbuwekmex/image/upload/v1759615849/Messenger_creation_4B26A902-878F-4121-A6DD-363642C93FEA_kkfnmv.jpg'
    }
]

function createImages() {
    for ( let i = 0; i <= images.length - 1; i++) {
        const newImage = document.createElement('img');

        newImage.src = `${images[i].src}`;
        newImage.alt = `${images[i].alt}`;
        newImage.className = "image";

        container.appendChild(newImage);
    };
};


createImages();