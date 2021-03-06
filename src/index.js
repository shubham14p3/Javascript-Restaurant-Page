import Home from './modules/home';
import Menu from './modules/menu';
import About from './modules/about';
import Contact from './modules/contact';
import Footer from './modules/footer';

const Restaurant = (function () {
  const PAGE = {
    HOME: 1,
    MENU: 2,
    ABOUT: 3,
    CONTACT: 4,
  };
  Home.loadNavigationBar();
  Home.createCenterText();
  Footer.createFooter();
  let currentPage = PAGE.HOME;

  const deleteNode = (node) => {
    const containerDiv = document.getElementById(node);
    // just deleting menuDiv won't help, you'll have to delete all its child nodes
    while (containerDiv.firstElementChild) {
      containerDiv.removeChild(containerDiv.lastElementChild);
    }
    containerDiv.remove();
  };

  const menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', () => {
    switch (currentPage) {
      case PAGE.HOME:
        deleteNode('centerText');
        break;
      case PAGE.ABOUT:
        deleteNode('aboutTextDiv');
        break;
      case PAGE.CONTACT:
        deleteNode('contactInfo');
        break;
      default:
        break;
    }
    if (currentPage !== PAGE.MENU) {
      currentPage = PAGE.MENU;
      Menu.loadMenu();
      deleteNode('footer');
    }
  });

  const homeButton = document.getElementById('homeButton');
  homeButton.addEventListener('click', () => {
    switch (currentPage) {
      case PAGE.MENU:
        deleteNode('menu');
        break;
      case PAGE.ABOUT:
        deleteNode('aboutTextDiv');
        break;
      case PAGE.CONTACT:
        deleteNode('contactInfo');
        break;
      default:
        break;
    }
    if (currentPage !== PAGE.HOME) {
      currentPage = PAGE.HOME;
    }
  });

  const aboutButton = document.getElementById('aboutButton');
  aboutButton.addEventListener('click', () => {
    switch (currentPage) {
      case PAGE.MENU:
        deleteNode('menu');
        break;
      case PAGE.HOME:
        deleteNode('centerText');
        break;
      case PAGE.CONTACT:
        deleteNode('contactInfo');
        break;
      default:
        break;
    }
    if (currentPage !== PAGE.ABOUT) {
      currentPage = PAGE.ABOUT;
      About.createAbout();
    }
  });

  const contactButton = document.getElementById('contactButton');
  contactButton.addEventListener('click', () => {
    switch (currentPage) {
      case PAGE.MENU:
        deleteNode('menu');
        break;
      case PAGE.HOME:
        deleteNode('centerText');
        break;
      case PAGE.ABOUT:
        deleteNode('aboutTextDiv');
        break;
      default:
        break;
    }
    if (currentPage !== PAGE.CONTACT) {
      currentPage = PAGE.CONTACT;
      Contact.createContact();
      Footer.createFooter();
    }
  });
}());
export default Restaurant;
