const Home = (() => {
  const contentDiv = document.getElementById('content');
  const navbarDiv = document.createElement('div');

  const createNavBar = () => {
    navbarDiv.setAttribute('id', 'navbar');
    contentDiv.appendChild(navbarDiv);
  };

  const createButton = (attribute, text) => {
    const button = document.createElement('button');
    button.setAttribute('id', attribute);
    button.innerText = text;
    navbarDiv.appendChild(button);
  };

  const createLogo = () => {
    const logoSpan = document.createElement('span');
    logoSpan.innerText = 'FOOD-WAR';
    logoSpan.setAttribute('id', 'logo');
    navbarDiv.appendChild(logoSpan);
  };

  const createCenterText = () => {
    const centerTextDiv = document.createElement('div');
    centerTextDiv.setAttribute('id', 'centerText');
    const text = document.createElement('span');
    text.innerText = 'Inspired by FOOD-WAR anime \n You are free to order anything. ';
    contentDiv.appendChild(centerTextDiv);
    centerTextDiv.appendChild(text);
  };


  const loadNavigationBar = () => {
    createNavBar();
    createLogo();
    createButton('homeButton', 'Home');
    createButton('menuButton', 'Menu');
    createButton('aboutButton', 'About');
    createButton('contactButton', 'Contact');
  };

  return { loadNavigationBar, createCenterText };
})();

export default Home;