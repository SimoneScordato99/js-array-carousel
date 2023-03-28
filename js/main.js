let arrayImg = [
    'https://picsum.photos/id/237/700/500',
    'https://picsum.photos/id/465/700/500',
    'https://picsum.photos/id/765/700/500',
    'https://picsum.photos/id/743/700/500',
    'https://picsum.photos/id/1/700/500',
    'https://picsum.photos/id/946/700/500',
    'https://picsum.photos/id/152/700/500',
]

for (let i = 0 ; i < arrayImg.length ; i++) {
    let divImg = document.querySelector('.immagini').innerHTML += `
        <div class="immagine">
            <img src="${arrayImg[i]}" alt="">
        </div>
    `;
    console.log(divImg)
}

let frecciaDx = document.querySelector('.frecciaDx')
let frecciaSx = document.querySelector('.frecciaSx')

frecciaDx.addEventListener('click', function(){
    let img = document.querySelector(".immagine")
    console.log(img)
    if (img.classList.contains('attiva')){

        img.classList.remove('attiva');
        img.nextElementSibling.classList.add("attiva");
    }
    

})
console.log(frecciaDx)