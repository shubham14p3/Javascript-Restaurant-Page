const Contact = (function () {
    const contentDiv = document.getElementById("content");
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contactInfo");

    const createHeading = (parentDiv, text) => {
        const div = document.createElement("span");
        div.innerHTML = text;
        parentDiv.appendChild(div);
    }

    const createInfo = (parentDiv, text) => {
        const div = document.createElement("span");
        div.innerHTML = text;
        parentDiv.appendChild(div);
    }

    const createTimingsDiv = () => {
        const timingDiv = document.createElement("div");
        contactDiv.appendChild(timingDiv);
        timingDiv.setAttribute("id", "timingDiv");
        timingDiv.innerHTML = '<i class="fa fa-3x fa-cutlery" aria-hidden="true"></i>';
        
        createHeading(timingDiv, "Timings");
        createInfo(timingDiv, "9:00am - 12:00am");
    }

    const createPhoneDiv = () => {
        const phoneDiv = document.createElement("div");
        contactDiv.appendChild(phoneDiv);
        phoneDiv.setAttribute("id", "phoneDiv");
        phoneDiv.innerHTML = '<i class="fa fa-3x fa-phone" aria-hidden="true"></i>';

        createHeading(phoneDiv, "Phone");
        createInfo(phoneDiv, "1234567899");
    }

    const createEmailDiv = () => {
        const emailDiv = document.createElement("div");
        contactDiv.appendChild(emailDiv);
        emailDiv.setAttribute("id", "emailDiv");
        emailDiv.innerHTML = '<i class="fa fa-3x fa-envelope-o" aria-hidden="true"></i>';

        createHeading(emailDiv, "Email");
        createInfo(emailDiv, "shubham14p3@gmail.com");
    }

    const createLocationDiv = () => {
        const locationDiv = document.createElement("div");
        contactDiv.appendChild(locationDiv);
        locationDiv.setAttribute("id", "locationDiv");
        locationDiv.innerHTML = '<i class="fa fa-3x fa-map-marker" aria-hidden="true"></i>';

        createHeading(locationDiv, "Location");
        createInfo(locationDiv, "Jamshedpur, India");
    }

    const createContact = () => {
        createTimingsDiv();
        createPhoneDiv();
        createEmailDiv();
        createLocationDiv();
        contentDiv.appendChild(contactDiv);
    }

    return { createContact };
})();

export default Contact;