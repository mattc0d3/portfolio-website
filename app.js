const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    // Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id
        if (id) {
            console.log(sectBtn)
            // remove selected from other buttons
            sectBtn.forEach(btn => {
                btn.classList.remove('active-btn')
            })
            e.target.classList.add('active-btn')

            // hide other sections
            sections.forEach(section => {
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () => {
        let element = document.body
        element.classList.toggle('light-mode')
    })
}

pageTransitions()

const portfolioIcons = document.querySelectorAll(".portfolio-item")
const portfolioDescriptions = document.querySelectorAll(".portfolio-description")

for (let i = 0; i < portfolioIcons.length; i++) {
    revealDescription(portfolioIcons[i], portfolioDescriptions[i])
}

function revealDescription(icon, description) {
    icon.addEventListener("mouseover", () => {
        description.style.display = "block"
    })
    icon.addEventListener("mouseleave", () => {
        description.style.display = "none"
    })
}
