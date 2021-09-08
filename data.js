const NavMenu = document.getElementById('nav-menu'),
      NavToggle = document.getElementById('nav-toggle'),
      NavClose = document.getElementById('nav-close')

      
      if(NavToggle){
          NavToggle.addEventListener('click' , () => {
              NavMenu.classList.add('show-menu')
            })
        }
        
        if(NavClose){
            NavClose.addEventListener('click', ()=>{
                NavMenu.classList.remove('show-menu')
            })
        }
        const navLink = document.querySelectorAll('.nav_link')
        
        function linkAction () {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click' , linkAction))
 

        const protectData = document.getElementsByClassName('proyectos__content');
              proyectAll = document.querySelectorAll('.skills__header2');
        
        function toggleSkills () {
            let itemClass = this.parentNode.className

            for(i = 0 ; i < protectData.length ; i++){
                protectData[i].className = "proyectos__content education__close"
            }
            if(itemClass === 'proyectos__content education__close'){
                this.parentNode.className = "proyectos__content education__open"
            }
        }

        proyectAll.forEach((el) => {
            el.addEventListener('click' , toggleSkills)
        })



const themeButton = document.getElementById('change-theme');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon =() => document.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})