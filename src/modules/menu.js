const Menu = (function () {
  const contentDiv = document.getElementById('content');
  const menuDiv = document.createElement('div');

  const addDetailsToMenu = () => {
    contentDiv.appendChild(menuDiv);
    menuDiv.setAttribute('id', 'menu');
  };

  const addFoodItems = () => {
    const foodPaths = ['assets/img/AppleRisotto.png', 'assets/img/ChickenEggTempuraDon.png', 'assets/img/ChaliapinSteakDon.png',
      'assets/img/SoupeDePoissonRamen.png', 'assets/img/NaporitanCurryFettuccine.png', 'assets/img/TosaWagyuSukiyaki.png', 'assets/img/CapitoneInUmido.png',
      'assets/img/MapoDoufu.jpg', 'assets/img/LazijiCaiman.png', 'assets/img/TimeFuseMapoCurryNoodles.png', 'assets/img/CharOkakiage.png',
      'assets/img/YuanStyleGrilledTokishirazu.png', 'assets/img/YukihiraStyleBarleyFlourSoba.png', 'assets/img/WhiteAmourPlateSauceChevreuil.png',
      'assets/img/SouffleLegerdeGrace.png', 'assets/img/SpanishMackarel.png', 'assets/img/RainbowTerrine.png',
      'assets/img/QuailStuffedwithRisottoandEggs.png', 'assets/img/CanardApicius.png', 'assets/img/MiniSouffleOmelette.png'];

    for (let i = 0; i < foodPaths.length; i += 1) {
      const foodDiv = document.createElement('div');
      const foodImage = document.createElement('img');
      foodImage.src = foodPaths[i];
      const foodName = document.createElement('span');
      foodName.innerText = foodPaths[i].match(/[A-Z][a-z]+/g).join(' ');
      foodDiv.setAttribute('class', 'foodItem');
      foodName.setAttribute('id', 'foodItemName');
      foodDiv.appendChild(foodImage);
      foodDiv.appendChild(foodName);
      menuDiv.appendChild(foodDiv);
    }
  };

  const loadMenu = () => {
    addDetailsToMenu();
    addFoodItems();
  };
  return { loadMenu };
}());

export default Menu;
