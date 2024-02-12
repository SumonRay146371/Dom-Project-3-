// document.querySelector('.element').addEventListener('mousemove',function(value){
// document.querySelector('.img').style.left=value.x + 'px'
// document.querySelector('.img').style.top=value.y + 'px'



// })  
// document.querySelector('.element').addEventListener('mousemove',function(value){
// document.querySelector('.img').style.opacity='1'


// })  
// document.querySelector('.element').addEventListener('mouseleave',function(value){
// document.querySelector('.img').style.opacity='0'


// })  








let element=document.querySelectorAll('.element')

element.forEach(function(value){
    value.addEventListener('mouseenter',function(){

        value.childNodes[3].style.opacity='1'
    })
    value.addEventListener('mouseleave',function(){

        value.childNodes[3].style.opacity='0'
    })
    value.addEventListener('mousemove',function(val){

        value.childNodes[3].style.left=val.x + 'px'
    })
})


