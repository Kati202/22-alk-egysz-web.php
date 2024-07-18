var navElem = document.querySelector("nav"); 
function MenuClick()
{
    navElem.classList.toggle("open"); 
}
navElem.onclick = MenuClick;