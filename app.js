const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu button');
const gardens = document.querySelector('.gardens-btn');
const lawn = document.querySelector('.lawn-btn');
const planting = document.querySelector('.planting-btn');
const images = Array.from(document.querySelectorAll('.image'));
const accItemB = document.querySelector('.basics');
const accItemS = document.querySelector('.standard');
const accItemP = document.querySelector('.pro-care');
const opItemB = document.querySelector('.op-b');
const opItemS = document.querySelector('.op-s');
const opItemP = document.querySelector('.op-p');
const closeAccB = document.querySelector('.op-b .heading');
const closeAccS = document.querySelector('.op-s .heading');
const closeAccP = document.querySelector('.op-p .heading');
const basicsP = document.querySelector('.basics p');
const standardP = document.querySelector('.standard p');
const proCareP = document.querySelector('.pro-care p');
const headPBas = document.querySelector('.op-b .heading p');
const headPSt = document.querySelector('.op-s .heading p');
const headPPro = document.querySelector('.op-p .heading p');
const accBtnB = document.querySelector('.basics .acc-btn img');
const accBtnS = document.querySelector('.standard .acc-btn img');
const accBtnP = document.querySelector('.pro-care .acc-btn img');
const closeBtnB = document.querySelector('.op-b .heading img');
const closeBtnS = document.querySelector('.op-s .heading img');
const closeBtnP = document.querySelector('.op-p .heading img');
const dropdown = document.querySelector('.dropdown');
const citiesUl = document.querySelector('#cities ul');
const selectBtn = document.querySelector('.select-btn');
const citiesArr = Array.from(document.querySelectorAll('#cities ul li'));
const cardsArr = Array.from(document.querySelectorAll('.city-card'));
const dropdownP = document.querySelector('.dropdown p');


window.addEventListener('click', (e) => {
    if (e.target === burger) {
        burgerMenu.classList.add('active');
    } else if (e.target === burgerClose || !e.target.closest('.burger-menu')) {
        burgerMenu.classList.remove('active');
    }

    if (e.target === gardens) {
        gardens.classList.add('btn-active');
        lawn.classList.remove('btn-active');
        planting.classList.remove('btn-active');
        images.forEach(item => {
            item.classList.remove('blur');
            if (item.classList.contains('garden') === false) {
                item.classList.add('blur');
            }
        })
    } if (e.target === lawn) {
        gardens.classList.remove('btn-active');
        lawn.classList.add('btn-active');
        planting.classList.remove('btn-active');
        images.forEach(item => {
            item.classList.remove('blur');
            if (item.classList.contains('lawn') === false) {
                item.classList.add('blur');
            }
        })
    } if (e.target === planting) {
        gardens.classList.remove('btn-active');
        lawn.classList.remove('btn-active');
        planting.classList.add('btn-active');
        images.forEach(item => {
            item.classList.remove('blur');
            if (item.classList.contains('planting') === false) {
                item.classList.add('blur');
            }
        })
    }

    if (e.target === accItemB || e.target === basicsP || e.target === accBtnB) {
        opItemB.classList.add('visible');
        opItemS.classList.remove('visible');
        opItemP.classList.remove('visible');
    } else if (e.target === closeAccB || e.target === headPBas || e.target === closeBtnB || e.target.matches('.op-b') == false) {
        opItemB.classList.remove('visible');
    }

    if (e.target === accItemS || e.target === standardP || e.target === accBtnS) {
        opItemS.classList.add('visible');
        opItemB.classList.remove('visible');
        opItemP.classList.remove('visible');
    } else if (e.target === closeAccS || e.target === headPSt || e.target === closeBtnS || e.target.matches('.op-s') == false) {
        opItemS.classList.remove('visible');
    }

    if (e.target === accItemP || e.target === proCareP || e.target === accBtnP) {
        opItemP.classList.add('visible');
        opItemS.classList.remove('visible');
        opItemB.classList.remove('visible');
    } else if (e.target === closeAccP || e.target === headPPro || e.target === closeBtnP || e.target.matches('.op-p') == false) {
        opItemP.classList.remove('visible');
    }

    if (e.target === dropdown || e.target === dropdownP) {
        citiesUl.classList.add('active');
        dropdown.style.background = '#c1e698';
        selectBtn.style.background = 'url(img/select-btn-active.png)';
        dropdown.style.boxShadow = 'none';
    } if (e.target === selectBtn || e.target.matches('.dropdown') == false) {
        citiesUl.classList.remove('active');
        dropdown.style.background = '#d6e7d2';
        selectBtn.style.background = 'url(img/select-btn.svg)';
        dropdown.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.25)';
    }

    if (e.target.matches('#cities ul li')){
        citiesUl.classList.remove('active');
        citiesArr.forEach(item => {
            dropdownP.innerText = e.target.textContent;
            const index = citiesArr.indexOf(e.target);
            cardsArr.forEach(item => {
                item.classList.remove('visible');
            })
            cardsArr[index].classList.add('visible');
        })
    }
})

