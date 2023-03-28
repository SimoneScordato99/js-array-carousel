let arrayImg = [
    'https://picsum.photos/id/237/700/500',
    'https://picsum.photos/id/465/700/500',
    'https://picsum.photos/id/765/700/500',
    'https://picsum.photos/id/743/700/500',
    'https://picsum.photos/id/1/700/500',
    'https://picsum.photos/id/946/700/500',
    'https://picsum.photos/id/136/700/500',
    'https://picsum.photos/id/512/700/500',
    'https://picsum.photos/id/100/700/500',
    'https://picsum.photos/id/111/700/500',
    'https://picsum.photos/id/789/700/500',
    'https://picsum.photos/id/456/700/500',
    'https://picsum.photos/id/123/700/500',
    'https://picsum.photos/id/147/700/500',
]

for (let i = 0 ; i < arrayImg.length ; i++) {
    let divImg = document.querySelector('.immagini').innerHTML += `
        <div class="immagine" id="img${i}">
            <img src="${arrayImg[i]}" alt="">
        </div>
    `;
}

let frecciaDx = document.querySelector('.frecciaDx')
let frecciaSx = document.querySelector('.frecciaSx')

// let immagineAttiva = document.getElementById(`img0`)
let immagineAttiva = 0;


frecciaDx.addEventListener('click', function(){
    //let img = document.querySelector(".immagine")
    let vecchiaImg = document.getElementById(`img${immagineAttiva}`)
    immagineAttiva = immagineAttiva + 1;
    // se imgattiva = array.lenght -> imaattiva = 0
    if (immagineAttiva == arrayImg.length) {
        immagineAttiva = 0;
    }
    let nuovaImg= document.getElementById(`img${immagineAttiva}`);
    if (vecchiaImg.classList.contains('attiva')){

        vecchiaImg.classList.remove('attiva');
        nuovaImg.classList.add('attiva');
    }
    

})
frecciaSx.addEventListener('click', function(){
    //let img = document.querySelector(".immagine")
    let vecchiaImg = document.getElementById(`img${immagineAttiva}`)
    // se imgattiva = array.lenght -> imaattiva = 0
    if (immagineAttiva == 0) {
        immagineAttiva = arrayImg.length;
    }
    immagineAttiva = immagineAttiva - 1;
    let nuovaImg= document.getElementById(`img${immagineAttiva}`);
    if (vecchiaImg.classList.contains('attiva')){

        vecchiaImg.classList.remove('attiva');
        nuovaImg.classList.add('attiva');
    }
    

})

console.log(frecciaDx,frecciaSx)