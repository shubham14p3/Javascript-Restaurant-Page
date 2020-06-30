const Menu = (function(){
    const contentDiv = document.getElementById('content');
    const menuDiv = document.createElement('div');

    const addDetailsToMenu = () => {
        contentDiv.appendChild(menuDiv);
        menuDiv.setAttribute("id" , "menu");
    }

    const addFoodItems = () => {
        const foodPaths = ["img/AppleRisotto.png" , "img/ChickenEggTempuraDon.png" , "img/ChaliapinSteakDon.png",
        "img/SoupeDePoissonRamen.png","img/NaporitanCurryFettuccine.png" , "img/TosaWagyuSukiyaki.png" , "img/CapitoneInUmido.png",
        "img/MapoDoufu.jpg" , "img/LazijiCaiman.png" , "img/TimeFuseMapoCurryNoodles.png" , "img/CharOkakiage.png",
        "img/YuanStyleGrilledTokishirazu.png", "img/YukihiraStyleBarleyFlourSoba.png" ,"img/WhiteAmourPlateSauceChevreuil.png",
        "img/SouffleLegerdeGrace.png" , "img/SpanishMackarel.png" , "img/RainbowTerrine.png" , 
        "img/QuailStuffedwithRisottoandEggs.png" , "img/CanardApicius.png" , "img/MiniSouffleOmelette.png"];

        for(let i = 0 ; i<foodPaths.length ; i++){
            const foodDiv = document.createElement("div");
            const foodImage = document.createElement("img");
            foodImage.src = foodPaths[i];
            const foodName = document.createElement("span");
            foodName.innerText = foodPaths[i].match(/[A-Z][a-z]+/g).join(" ");
            foodDiv.setAttribute("class" , "foodItem");
            foodName.setAttribute("id" , "foodItemName");
            foodDiv.appendChild(foodImage);
            foodDiv.appendChild(foodName);
            menuDiv.appendChild(foodDiv);
        }
    }

    const loadMenu = () => {
        addDetailsToMenu();
        addFoodItems();
    }
    return {loadMenu};
})();

export default Menu;
