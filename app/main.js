const MENUICON = document.getElementById('menu-icon');
const CLOESICON = document.getElementById('close-icon');
const HEADER = document.getElementsByTagName('header')[0];
const handleNav = () => {
  HEADER.classList.toggle('nav-open');
  console.log('clicked');
};
MENUICON.addEventListener('click',  handleNav);
CLOESICON.addEventListener('click',  handleNav);

