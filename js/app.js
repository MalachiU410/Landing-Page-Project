// Grab the nav bar list element 
const navBar = document.querySelector("#navbar__list");
// Grab all sections
const sections = document.querySelectorAll("section")
// Populate navBar with sections

sections.forEach(section => {
    const sectHead = document.createElement('li')
    sectHead.innerHTML = section.getAttribute('data-nav')
    // Add event listener to section headers
    sectHead.addEventListener('click', (event) => {
        event.preventDefault()
        section.scrollIntoView({behavior: 'smooth'})
        console.log('clicked')
    })
    navBar.appendChild(sectHead)
})
// Hightlight in navbar
// When scroll event happens scroll into view
window.addEventListener('scroll', (e) =>{
    e.preventDefault()
    sections.forEach((section, i) => {
        // Figure out what has scrolled into view
        if(section.getBoundingClientRect().y > -400 && section.getBoundingClientRect().y < 300) {
            // Add active class to sections
            section.classList.add('active')
            document.querySelectorAll('li')[i].classList.add('active')
        }
        else{
            // Remove active class from all other sections that are not in view
            section.classList.remove('active')
            document.querySelectorAll('li')[i].classList.remove('active')
        }
    })   
})