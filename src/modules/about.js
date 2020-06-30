const About = (function () {
    const contentDiv = document.getElementById("content");

    const createAbout = () => {
        const aboutDiv = document.createElement("div");
        aboutDiv.setAttribute("id" , "aboutTextDiv");
        const text = document.createElement("span");
        text.innerText = "Incpired by Food-War Anime, Created and Designed by -Shubham Raj"
        aboutDiv.appendChild(text);
        contentDiv.appendChild(aboutDiv);
    }

    return {createAbout};
})();

export default About;