class PersonCard {
    constructor(element, data) {
        this.element = element;

        this.data = data;

        this.element.addEventListener("mouseover", _ => {

        })
    }


}

class PersonFactory {
    constructor(data) {
        this.people = [];

        this.parent = document.querySelector(".people-container");

        this.people = data.map(elemData => {
            let element = this.constructHTML(elemData);

            return new PersonCard(element, elemData);
        })
    }

    constructHTML(data) {
        let container = this.constructElement(this.parent, "div", "", [ "person" ]);
        
        this.constructElement(container, "img", "", ["person-img"]).src = data.img;

        let contentDiv = this.constructElement(container, "div", "", ["person-content"]);

        this.constructElement(contentDiv, "h3", data.name, []);
        this.constructElement(contentDiv, "p", data.about, []);

        return container;
    }

    constructElement(parent, type, data, classes) {
        let element = document.createElement(type);
        parent.appendChild(element);

        if(data && data !== "") element.textContent = data;

        classes.forEach(cssClass => element.classList.add(cssClass));

        return element;
    }
}

const data = [
    { id: "1", name: "Vincent", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "2", name: "Other", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." }
]

const factory = new PersonFactory(data);