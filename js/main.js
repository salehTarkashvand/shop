let slideInedex = 1;
function setslide(input,index){
    slideInedex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector(`.slides`).children]
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active')
    
}
setInterval(()=>{
    slideInedex+=1;
    if(slideInedex==4){
        slideInedex=1;
    }
    setslide(`slide${slideInedex}`,slideInedex)
},8000)