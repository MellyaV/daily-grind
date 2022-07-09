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

    myReturn += `
        <p>
                <img src="${coffee.pic}" alt="${coffee.alt}" id="cofeee"/>
                <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc} 
        </p>
    `;
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
}

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            day: "Wednesdsay",
            desc: `I like me some Bubble Tea!`
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
            desc: `I like Mocha!`
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
console.log(coffee);
