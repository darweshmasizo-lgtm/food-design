const icons = document.querySelectorAll('.section-1-icons i')
let1=1

setInterval(() =>{
    i++

  const icon = document.querySelector('.section-1-icons .change')

   if(i > icons.length){
      icon[0].classList.add('change')
      i = 1
   }

 icon.classList.remove('change')
 icon.nextElementSibling.classList.add('change')


}, 4000)
