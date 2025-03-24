const toggleButton = document.getElementById('toggle-btn') //The button that toggles the sidebar (opens or closes it).
const sidebar = document.getElementById('sidebar') //The main sidebar element.

//This function toggles the sidebar's open/close state.
function toggleSidebar(){
    sidebar.classList.toggle('close') //Toggle the 'close' class on the sidebar (open/close effect)
    toggleButton.classList.toggle('rotate') // Rotate the button when sidebar state changes

    closeAllSubMenus() // Close all submenus when sidebar is toggled
}
//This function handles submenu toggling:
function toggleSubMenu(button){
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus()  // Close all other submenus before opening a new one
    }
    button.nextElementSibling.classList.toggle('show')  // Toggle the submenu visibility
    button.classList.toggle('rotate')  // Ensure the sidebar opens if it was closed
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')  // Ensure the sidebar opens if it was closed
        toggleButton.classList.toggle('rotate')  // Rotate main toggle button if needed
    }
}
//This function closes all open submenus:
function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')  // Remove 'show' class to hide all submenus
        ul.previousElementSibling.classList.remove('rotate')  // Reset button rotation
    });
}