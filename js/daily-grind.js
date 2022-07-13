//alert("It's working!");


/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee
*/


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc} 
    </p>`;

    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data on query string, load from query string
    myDay = urlParams.get("day");
    //converts to integer
    myDay = parseInt(myDay);
}

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color: "green",
            name: "Frappaccino",
            pic:  "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Sunday",
            desc: `Frappy?!`,
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            color: "gold",
            name: "Caramel Latte",
            pic:  "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Monday",
            desc: `We all deserve some extra sweetness on a Monday!`,
       };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "orange",
            name: "pumpkin Spice Latte",
            pic:  "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Tuesday",
            desc: `Tis the season!`,
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            day: "Wednesdsay",
            desc: `We'd recommend a Matcha milk tea with fresh honey boba!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            day: "Thursday",
            desc: `CHOCOLATE CHOCOLATE CHOCOLATE!`
        };
    break;

    case 5:
       today = "Friday";
       coffee = {
            color: "chartreuse",
            name: "Cold Brew",
            pic:  "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            day: "Friday",
            desc: `Cold Brew is the only way to consume coffee!`,
       };
    break;

    case 6:
       today = "Saturday";
       coffee = {
            color: "purple",
            name: "Drip Coffee",
            pic:  "images/drip.jpg",
            alt: "A picture of a Drip Coffee",
            day: "Saturday",
            desc: `Would you like some cream or sugar?!`,
       };
    break;

    default:
        today = "Something went wrong!";
}

//let coffeeData = coffeeTemplate(coffee);
//alert(coffee.pic);

//loads coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
//console.log(coffee);
