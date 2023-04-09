let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let blur = document.getElementById('blur')
let hue_rotate = document.getElementById('hue-rotate')
let resetbtn = document.querySelector('.reset')
let downloadbtn = document.querySelector('.download')
let uploadbtn = document.getElementById('Upload')
let img = document.querySelector('.Box-img img')
let filters = document.querySelectorAll('.filters input')

function resevalues(){
    img.style.filter='none'
    saturate.value='100'
    contrast.value='100'
    brightness.value='100'
    blur.value='0'
    hue_rotate.value='0'
}

window.onload= function(){
    resetbtn.style.display='none'
    downloadbtn.style.display='none'

}
// upload function 
uploadbtn.addEventListener('change',function(){
    resevalues()
    resetbtn.style.display='block'
    downloadbtn.style.display='block';
    let file =new FileReader()
    file.readAsDataURL(uploadbtn.files[0])
    file.onload = function(){
img.src=file.result;
    }

})
filters.forEach( filter=>{
    filter.addEventListener('input',function(){
        img.style.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        blur(${blur.value}px)
       hue-rotate(${hue_rotate.value}deg)
       
        `
    })
})
resetbtn.onclick= function(){
    resevalues()
}


