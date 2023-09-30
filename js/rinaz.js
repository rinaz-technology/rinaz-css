/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, leftSidebarId, specialContainerId, navbarId) =>{
    const toggle = document.getElementById(toggleId),
    leftSidebar = document.getElementById(leftSidebarId),
    specialContainer = document.getElementById(specialContainerId),
    navbarpd = document.getElementById(navbarId)

    // Validate that all variables exist
    if(toggle && leftSidebar && specialContainer && navbarpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            leftSidebar.classList.toggle('show')
            // add padding to special container
            specialContainer.classList.toggle('special-container-pl')
            // add padding to navbar
            navbarpd.classList.toggle('special-container-pl')
        })
    }
}

showNavbar('navbar-toggle','left-sidebar','special-container','navbar')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.sidebar__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


//=============== Dark Mode ============

var switchTheme = document.getElementById("theme");

    switchTheme.onclick = function switchTheme() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        var navbar = document.getElementById("navbar")
        navbar.classList.toggle("dark-mode");
        var sidebar = document.getElementById("left-sidebar")
        sidebar.classList.toggle("dark-mode");
        var dropdownContent = document.getElementById('myDropdown')
        dropdownContent.classList.toggle("dark-mode");

// toggle theme svg
var toggle = false;
        if (toggle === true) {
            switchTheme.src  = 'rinaz-glassicons/moon-glass.svg';
        } else {
           switchTheme.src = 'rinaz-glassicons/sun-glass.svg';
        }
        toggle = !toggle; 
 }
 

// dropDown

var dropdown = document.getElementById('dropdown')

dropdown.onclick = function dropDown() {
    document.getElementById("myDropdown").classList.toggle("d-block");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('d-block')) {
          openDropdown.classList.remove('d-block');
        }
      }
    }
  }