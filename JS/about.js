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

        container.dataset.personId = data.id;
        
        this.constructElement(container, "img", "", ["person-img"]).src = data.img;

        let contentDiv = this.constructElement(container, "div", "", ["person-content"]);

        let title = this.constructElement(contentDiv, "h3", data.name, []);
        this.constructElement(title, "h4", data.role, []);
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
    { id: "1", name: "Sam Ko", role: " - Team Lead", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "2", name: "Vijay Das", role: " - Backend", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "3", name: "Tyler Lippe", role: " - Frontend", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "4", name: "Ryan Wisniewski", role: " - User Interface", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "5", name: "Vincent Costa", role: " - User Interface", img: "", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." }
]

const factory = new PersonFactory(data);