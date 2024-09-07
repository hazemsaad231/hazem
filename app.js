let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let sepia = document.getElementById('sepia')
let grayscale = document.getElementById('grayscale')
let blur = document.getElementById('blur')
let huerotate = document.getElementById('huerotate')

let upload = document.getElementById('upload')
let image = document.querySelector('.image')
let img = document.getElementById('img')
let download = document.getElementById('download')
let save = document.querySelector('span')

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

window.onload = function(){
    download.style.display = 'none';
    save.style.display = 'none';
    image.style.display = 'none';

    
}

function resetValue(){
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value ='0'
    blur.value = '0'
    huerotate.value ='0'
}


upload.onchange =function(){

    download.style.display = 'block';
    save.style.display = 'block';
    image.style.display = 'block';

    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result;

    }

    img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display='none'
    }
}

let filters = document.querySelectorAll('ul li input') 

filters.forEach(filter => {
    filter.addEventListener('input',function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        
        
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
    
});

download.onclick = function(){

    download.href = canvas.toDataURL()
}