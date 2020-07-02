const Footer = (function () {
  const contentDiv = document.getElementById("content");

  const createFooter = () => {
    const aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("id", "footer");
    const text = document.createElement("span");
    text.innerText = "@Shubham 2020-- All rights reserved.";
    aboutDiv.appendChild(text);
    contentDiv.appendChild(aboutDiv);
  };

  return {createFooter};
})();

export default Footer;


