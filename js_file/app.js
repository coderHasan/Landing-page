
const header = document.getElementById("header")
const footerDate = document.querySelector('.footer-date')
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', ()=>{
    header.classList.toggle('scroll-header', window.scrollY >= 50)
})
let date = `
    &copy; ${new Date().getFullYear()}<a href="https://jsdev-mehedi.netlify.app/" class="mehedi"> Mehedi Hasan</a> No Rights Reserved 😊. Build for fun.
`
footerDate.innerHTML += date

const scrollUp = document.getElementById('scroll-up')
window.addEventListener('scroll', () => {
    scrollUp.classList.toggle('show-scroll', window.scrollY >= 350)
})
// const scrollActive = () => {
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//         sectionTop = current.offestTop - 58,
//         sectionId = current.getAttribute('id'),
//         sectionClass = 
//             console.log(document.querySelector('.nav-menu a[href*=' + sectionId + ']'));

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             sectionClass.classList.add('active-link')
//         }else{
//             sectionClass.classList.remove('active-link')
//         }
        
//     })
// }

// window.addEventListener('scroll', scrollActive)

// const sr = ({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,

// })



