let inputText =document.getElementById('inp')
let button=document.getElementById('btn')
let span=document.getElementById('span1')
let div=document.getElementById('main')
const print=()=>{

if(inputText.value==100){
    console.log('this is a phone')
    span.innerHTML="this is a phone"
    div.style.backgroundImage="url(https://images.unsplash.com/photo-1667210621899-82b0317703d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60)"
   div.style.backgroundRepeat="no-repet"
   div.style.backgroundPosition="center"
   div.style.backgroundSize="cover"
}
else if(inputText.value==200){
    console.log('this is laptop')
    span.innerHTML="this is laptop"
    div.style.backgroundImage="url(https://tse4.mm.bing.net/th?id=OIP.JQbqY_SlUmTUVXBGye12bQHaE8&pid=Api&P=0)"
    div.style.backgroundRepeat="no-repet"
   div.style.backgroundPosition="center"
   div.style.backgroundSize="cover"
}
else if(inputText.value==300){
    span.innerHTML="iam here"
    div.style.backgroundImage="url(https://tse2.mm.bing.net/th?id=OIP.8xIvwj9-YC-HK96ppjtg7QHaJz&pid=Api&P=0)"
    div.style.backgroundRepeat="no-repet"
   div.style.backgroundPosition="center"
   div.style.backgroundSize="cover"
}
}