const responsiveMenu = () => {

    // Get elements
    const menuButton = document.querySelector('#menu-button')
    const menu = document.querySelector('.resp-menu')
    const closeButton = document.querySelector('.close-button')

    // Function to toggle menu
    const toggleMenu = () => {
        // Toggle class on menu
        menu.classList.toggle('resp-menu--open')
    }

    // Events
    menuButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)

}

responsiveMenu()