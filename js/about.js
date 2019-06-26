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
        let container = this.constructElement(this.parent, "div", "", [ "person", "hide-me" ]);

        container.dataset.personId = data.id;
        
        this.constructElement(container, "img", "", ["person-img"]).src = data.img;

        let contentDiv = this.constructElement(container, "div", "", ["person-content"]);

        let title = this.constructElement(contentDiv, "h3", data.name, []);
        this.constructElement(title, "h4", data.role, []);
        this.constructElement(title, "i", "", ["fab", "fa-github"]);
        this.constructElement(title, "i", "", ["fab", "fa-linkedin"]);

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
    { id: "1", name: "Sam Ko", role: " - Team Lead", img: "./img/SamKo_square.jpg", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "2", name: "Vijay Das", role: " - Backend", img: "./img/VijayD_square.jpg", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "3", name: "Tyler Lippe", role: " - Frontend", img: "./img/Tyler.jpg", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "4", name: "Ryan Wisniewski", role: " - User Interface", img: "./img/RyanW_square.jpg", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." },
    { id: "5", name: "Vincent Costa", role: " - User Interface", img: "./img/VincentC.jpg", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem repudiandae aliquid debitis obcaecati voluptas quos animi provident ipsam? Voluptates natus quasi mollitia illo ipsum, quis deserunt dolor aliquam quod." }
]

const factory = new PersonFactory(data);

$(document).ready(function() {
    console.log("loaded")
    
    /* Every time the window is scrolled ... */
    $(document).scroll( function(){

        /* Check the location of each desired element */
        $('.hide-me').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 325;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });
    
});