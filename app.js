var indexValue = 0;
function slideShow () {
    setTimeout(slideShow,1700)
    var x;
    const img = document.querySelectorAll('img');
    for(x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    } 
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();

const buyBtn = document.querySelector('.btn1')

buyBtn.addEventListener('click', () => {
    buyBtn.textContent = 'Loading...'
})

const darkBtn = document.querySelector('#dark-btn')
const backNew = document.querySelector('.new')
const header = document.querySelector('.header')
const centerPage = document.querySelector('.center-page')
const nav = document.querySelector('.navbar')
const lightBtn = document.querySelector('#light-btn')

darkBtn.addEventListener('click', () => {
    backNew.style = 'background-color: #222;'
    header.style = 'background-color: #333'
    centerPage.style = 'background-color: #333'
    darkBtn.style = 'display: none;'
    lightBtn.style = 'display: inline; '
})

lightBtn.addEventListener('click',() => {
    backNew.style = 'background-colir: rgb(182, 182, 182);'
    header.style = 'background-color: #777'
    centerPage.style = 'background-color: rgb(202, 202, 202)'
    darkBtn.style = 'display: inline;'
    lightBtn.style = 'display: none;'
})